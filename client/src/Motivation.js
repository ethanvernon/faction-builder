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
				<option value="activist">Envy</option>
				<option value="courier">Freedom</option>
				<option value="dealer">Knowledge</option>
				<option value="hacker">Lust</option>
				<option value="insider">Power</option>
				<option value="operative">Pride</option>
				<option value="outsider">Respect</option>
				<option value="tech">Revenge</option>
				<option value="torpedo">Greed</option>
				<option value="worker">Survival</option>
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
