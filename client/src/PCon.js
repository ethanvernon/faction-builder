import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPCons } from './action-creators/actions';
import './App.scss';
import { Col } from 'reactstrap';

class PCon extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.addPCon(event.target.value);
	}

	render() {		
		return (
			<select value={this.props.pCon} onChange={this.handleChange}>
				<option value="angry">Angry</option>
				<option value="armed">Armed</option>
				<option value="connected">Connected</option>
				<option value="convinced">Convinced</option>
				<option value="dangerous">Dangerous</option>
				<option value="enthused">Enthused</option>
				<option value="equipped">Equipped</option>
				<option value="financed">Financed</option>
				<option value="hardened">Hardened</option>
				<option value="loved">Loved</option>
				<option value="prepared">Prepared</option>
				<option value="supported">Supported</option>
			</select>
		);
	}
}

const mapStateToProps = ( state ) => {   
	return { 
		pCon: state.pCon.pCon,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		addPCon: (pCon) => {
			dispatch(addPCons(pCon))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PCon);
