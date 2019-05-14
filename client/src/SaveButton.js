import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { Button } from 'reactstrap';
import { putCharacter } from './action-creators/actions';
import { Col } from 'reactstrap';

class SaveButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log(this.props);
		this.props.putCharacter(this.props.character.character);
	}

	render() {
		const isLoading = this.props.loading;
		let button;

		if (isLoading) {
			button = (
				 <Button color='primary'>
				 	Saving...
				 </Button>
			);
		} else {
			button = (
				<Button color='primary' onClick={this.handleClick}>
					Save
				</Button>
			);
		}

		return (
			<div className='saveButton'>
				{ button }
			</div>
		);
	}
};

const mapStateToProps = ( state ) => {   
	return { 
		character: state.character,
		loading: state.saveCharacter.loading
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		putCharacter: (character) => {
			dispatch(putCharacter(character))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);