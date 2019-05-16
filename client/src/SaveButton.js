import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { Button } from 'reactstrap';
import { putFaction } from './action-creators/actions';
import { Col } from 'reactstrap';

class SaveButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log(this.props);		
		this.props.putFaction(this.factionMaker());
	}

	//our state is flattened, so we want to combine it all into a single faction object to send to db
	factionMaker() {

		var newFaction =  {
			name: this.props.name,
			identity: this.props.identity,
			pCon: this.props.pCon,
			nCon: this.props.nCon,
			influence: this.props.influence,
			motivation: this.props.motivation,
			npc: this.props.npc
		}

		return newFaction;
	}

	render() {
		const isSaving = this.props.saving;
		let button;

		if (isSaving) {
			button = (
				 <Button color='primary'>
				 	Saving...
				 </Button>
			);
		} else {
			button = (
				<Button color='primary' onClick={this.handleClick}>
					Save
				</Button>
			);
		}

		return (
			<div className='saveButton'>
				{ button }
			</div>
		);
	}
};

const mapStateToProps = ( state ) => {   
	return { 
		name: state.name.name,
		identity: state.identity.identity,
		pCon: state.pCon.pCon,
		nCon: state.nCon.nCon,
		influence: state.influence.influence,
		motivation: state.motivation.motivation,
		saving: state.saveFaction.saving,
		npc: state.npc.npc
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		putFaction: (faction) => {
			dispatch(putFaction(faction))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);