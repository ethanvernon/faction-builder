import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeGoal } from './action-creators/actions';
import './App.scss';
import { Col } from 'reactstrap';

class Goal extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.changeGoal(event.target.value);
	}

	render() {		
		return (
			<div>
				<input className='goal' type='text' placeholder="Please enter a goal" value={this.props.goal} onChange={this.handleChange}/>
			</div>
		);
	}
}

const mapStateToProps = ( state ) => {   
	return { 
		goal: state.goal.goal,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeGoal: (goal) => {
			dispatch(changeGoal(goal))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Goal);
