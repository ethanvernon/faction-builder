import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMotivation } from './action-creators/actions';
import './App.scss';
import { Col } from 'reactstrap';

class Motivation extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.changeMotivation(event.target.value);
	}

	render() {		
		return (
			<select value={this.props.motivation} onChange={this.handleChange}>
				<option value="envy">Envy</option>
				<option value="freedom">Freedom</option>
				<option value="knowledge">Knowledge</option>
				<option value="lust">Lust</option>
				<option value="power">Power</option>
				<option value="pride">Pride</option>
				<option value="respect">Respect</option>
				<option value="revenge">Revenge</option>
				<option value="greed">Greed</option>
				<option value="survival">Survival</option>
			</select>
		);
	}
}

const mapStateToProps = ( state ) => {   
	return { 
		motivation: state.motivation.motivation,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeMotivation: (motivation) => {
			dispatch(changeMotivation(motivation))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Motivation);
