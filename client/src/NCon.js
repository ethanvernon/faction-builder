import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNCons } from './action-creators/actions';
import './App.scss';
import { Col } from 'reactstrap';

class NCon extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.addNCon(event.target.value);
	}

	render() {		
		return (
			<select value={this.props.nCon} onChange={this.handleChange}>
				<option value="burned out">Burned Out</option>
				<option value="coerced">Coerced</option>
				<option value="confused">Confused</option>
				<option value="destitute">Destitute</option>
				<option value="dying">Dying</option>
				<option value="hesitant">Hesitant</option>
				<option value="humiliated">Humiliated</option>
				<option value="hunted">Hunted</option>
				<option value="impaired">Impaired</option>
				<option value="injured">Injured</option>
				<option value="lost">Lost</option>
				<option value="trapped">Trapped</option>
			</select>
		);
	}
}

 Burned Out  Coerced  Confused  Destitute  Dying  Hesitant
 Humiliated  Hunted  Impaired  Injured  Lost  Trapped

const mapStateToProps = ( state ) => {   
	return { 
		nCon: state.nCon.nCon,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		addNCon: (nCon) => {
			dispatch(addNCons(nCon))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(NCon);
