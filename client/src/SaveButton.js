import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { Button } from 'reactstrap';
import { putCharacter } from './action-creators/actions';
import { Col } from 'reactstrap';

class SaveButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log(this.props);		
		this.props.putCharacter(this.characterMaker());
	}

	//our state is flattened, so we want to combine it all into a single character object to send to db
	characterMaker() {
		var newCharacter =  {
			name: this.props.name,
			handle: this.props.handle,
			identity: this.props.identity,
			pCon: this.props.pCon,
			nCon: this.props.nCon,
			gear: this.props.gear,
			goal: this.props.goal,
			ready: this.props.ready,
			willing: this.props.willing,
			able: this.props.able,
			motivation: this.props.motivation
		}

		return newCharacter;
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
		handle: state.handle.handle,
		identity: state.identity.identity,
		pCon: state.pCon.pCon,
		nCon: state.nCon.nCon,
		gear: state.gear.gear,
		goal: state.goal.goal,
		ready: state.ready.ready,
		willing: state.willing.willing,
		able: state.able.able,
		motivation: state.motivation.motivation,
		saving: state.saveCharacter.saving
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		putCharacter: (character) => {
			dispatch(putCharacter(character))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);