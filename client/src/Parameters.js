import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeReady } from './action-creators/actions';
import { changeWilling } from './action-creators/actions';
import { changeAble } from './action-creators/actions';
import { changePoints } from './action-creators/actions';
import './App.scss';
import { Container, Row, Col } from 'reactstrap';

class Parameters extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(parameter, direction) {
		let ready = this.props.ready;
		let willing = this.props.willing;
		let able = this.props.able;
		let points = this.props.points;

		//if increasing parameter and still have points
		if (!points < 1 && direction=='inc') {

			//decrease points, increase ready value in store, update local points state
			if (parameter == 'ready' & ready < 8) {
				points--;
				this.props.changeReady(this.props.ready+1);
				this.props.changePoints(points);
			}

			//decrease points, increase willing value in store, update local points state
			if (parameter == 'willing' & willing < 8) {
				points--;
				this.props.changeWilling(this.props.willing+1);
				this.props.changePoints(points);
			}

			//decrease points, increase able value in store, update local points state
			if (parameter == 'able' & able < 8) {
				points--;
				this.props.changeAble(this.props.able+1);
				this.props.changePoints(points);
			}
		}

		//if decreasing parameter
		if (direction=='dec') {
			//increase points, decrease ready value in store, update local points state
			if (parameter == 'ready' & ready > 1) {
				points++;
				this.props.changeReady(this.props.ready-1);
				this.props.changePoints(points);
			}

			//increase points, decrease willing value in store, update local points state
			if (parameter == 'willing' & willing > 1) {
				points++;
				this.props.changeWilling(this.props.willing-1);
				this.props.changePoints(points);
			}

			//increase points, decrease able value in store, update local points state
			if (parameter == 'able' & able > 1) {
				points++;
				this.props.changeAble(this.props.able-1);
				this.props.changePoints(points);
			}
		}
	}

	render() {		
		return (
			<Container>
				<Row>
					Points to spend: {this.props.points}  
				</Row>
		    	<Row>			      
					<Col>
					Ready (max 8): 
						<span onClick={() => this.handleClick('ready', 'dec')}>
							-
						</span>
					</Col>
					<Col>
						<h3 id="break-length" className='length'>{this.props.ready}</h3>
					</Col>
					<Col>
						<span onClick={() => this.handleClick('ready', 'inc')}>
							+
						</span>
					</Col>
			      
					<Col>
					Willing (max 8): 
						<span onClick={() => this.handleClick('willing', 'dec')}>
							-
						</span>
					</Col>
					<Col>
						<h3 id="session-length" className='length'>{this.props.willing}</h3>
					</Col>
					<Col>
						<span onClick={() => this.handleClick('willing', 'inc')}>
							+
						</span>
					</Col>

					<Col>
					Able (max 8): 
						<span onClick={() => this.handleClick('able', 'dec')}>
							-
						</span>
					</Col>
					<Col>
						<h3 id="session-length" className='length'>{this.props.able}</h3>
					</Col>
					<Col>
						<span onClick={() => this.handleClick('able', 'inc')}>
							+
						</span>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = ( state ) => {   
	return { 
		ready: state.ready.ready,
		willing: state.willing.willing,
		able: state.able.able,
		points: state.points.points
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeReady: (ready) => {
			dispatch(changeReady(ready))
		},
		changeWilling: (willing) => {
			dispatch(changeWilling(willing))
		},
		changeAble: (able) => {
			dispatch(changeAble(able))
		},
		changePoints: (points) => {
			dispatch(changePoints(points))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Parameters);