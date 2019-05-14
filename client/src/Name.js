import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeName } from './action-creators/actions';
import './App.scss';
import { Col } from 'reactstrap';

class Name extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.changeName(event.target.value);
	}

	render() {		
		return (
			<div>
				<input className='name' type='text' placeholder="Please enter a name" value={this.props.name} onChange={this.handleChange}/>
			</div>
		);
	}
}

const mapStateToProps = ( state ) => {   
	return { 
		name: state.name.name,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeName: (name) => {
			dispatch(changeName(name))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Name);
