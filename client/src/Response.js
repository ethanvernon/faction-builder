import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { Button } from 'reactstrap';
import { putFaction } from './action-creators/actions';
import { Col } from 'reactstrap';

class Response extends Component {
	constructor(props) {
		super(props);
	}


	render() {		
		return (
			<div>
			{this.props.response &&
				<span>{JSON.stringify(this.props.response)}</span>
			}
			</div>
		);
	}
};

const mapStateToProps = ( state ) => {   
	return { 
		response: state.saveFaction.error
	}
};

export default connect(mapStateToProps, null)(Response);