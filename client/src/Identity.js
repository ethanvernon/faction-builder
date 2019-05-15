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
				<option value="activist">Activist</option>
				<option value="courier">Courier</option>
				<option value="dealer">Dealer</option>
				<option value="hacker">Hacker</option>
				<option value="insider">Insider</option>
				<option value="operative">Operative</option>
				<option value="outsider">Outsider</option>
				<option value="tech">Tech</option>
				<option value="torpedo">Torpedo</option>
				<option value="worker">Worker</option>
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
