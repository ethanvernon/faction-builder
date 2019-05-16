import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeIdentity } from './action-creators/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';

class Identity extends Component {
	constructor(props) {
		super(props);
		
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.changeIdentity(event.target.value);
	}

	render() {
		return (	
			<select value={this.props.identity} onChange={this.handleChange}>
				<option value="AI">AI</option>
				<option value="Corporation">Corporation</option>
				<option value="Entertainment">Entertainment</option>
				<option value="Agency">Agency</option>
				<option value="Group">Group</option>
				<option value="Ronin">Ronin</option>
				<option value="Pharma">Pharma</option>
				<option value="Military">Military</option>
				<option value="Idle Rich">Idle Rich</option>
				<option value="Gang">Gang</option>
			</select>					
		);
	}
}

const mapStateToProps = ( state ) => {   
	return { 
		identity: state.identity.identity
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeIdentity: (markdown) => {
			dispatch(changeIdentity(markdown))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Identity);
