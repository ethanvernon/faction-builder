import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';

class Parameters extends Component {
	constructor(props) {
		super(props);
	}

	render() {		
		return (
			<div>
				Influence: {this.props.influence} (default)
			</div>
		);
	}
}

const mapStateToProps = ( state ) => {   
	return { 
		influence: state.influence.influence
	}
};

export default connect(mapStateToProps, null)(Parameters);