import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeNpc } from './action-creators/actions';
import './App.scss';
import { Col } from 'reactstrap';

class Npc extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.changeNpc(event.target.value);
	}

	render() {		
		return (
			<div>
				<input className='npc' type='text' placeholder="Please enter an npc" value={this.props.npc} onChange={this.handleChange}/>
			</div>
		);
	}
}

const mapStateToProps = ( state ) => {   
	return { 
		npc: state.npcs.npc,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeNpc: (npc) => {
			dispatch(changeNpc(npc))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Npc);
