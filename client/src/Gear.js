import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGear } from './action-creators/actions';
import './App.scss';
import { Col } from 'reactstrap';

class Gear extends Component {
	constructor(props) {
		super(props);

		this.state = {
			brand: '',
			item: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(type, event) {
		//check if its gear or item and save to appropriate state
		if (type=="brand") {
			this.setState({
				brand: event.target.value
			})
		} else if (type=="item") {
			this.setState({
				item: event.target.value
			})
		}

		//check if both gear and item are chosen, if so send to store as string
		if (this.state.brand && this.state.item) {
			var newGear = this.state.brand + " " + this.state.item;
			this.props.addGear(newGear);
		}		
	}

	render() {		
		return (
			<div>
				<select value={this.state.brand} onChange={(e) => this.handleChange("brand", e)}>
					<optgroup label="Engineering">
						<option value="Asüna">Asüna</option>
						<option value="Datsun">Datsun</option>
						<option value="Dornier">Dornier</option>
						<option value="ERMA">ERMA</option>
						<option value="Gloster">Gloster</option>
						<option value="Heinkel">Heinkel</option>
						<option value="Merkur">Merkur</option>
						<option value="Nagant">Nagant</option>
						<option value="Otomo">Otomo</option>
						<option value="Pontiac">Pontiac</option>
					</optgroup>
					<optgroup label="Consumer">
						<option value="Abner">Abner</option>
						<option value="AIWA">AIWA</option>
						<option value="BIRACO">BIRACO</option>
						<option value="GoDaiKin">GoDaiKin</option>
						<option value="Kalophone">Kalophone</option>
						<option value="Lik Sang">Lik Sang</option>
						<option value="Orange Micro">Orange Micro</option>
						<option value="Pan Am">Pan Am</option>
						<option value="Plessey">Plessey</option>
						<option value="Zonite">Zonite</option>
					</optgroup>
				</select>


				<select value={this.state.item} onChange={(e) => this.handleChange("item", e)}>
					<optgroup label="Vehicles">
						<option value="Coupé">Coupé</option>
						<option value="Dumpster">Dumpster</option>
						<option value="Motorcycle">Motorcycle</option>
						<option value="MPV">MPV</option>
						<option value="Saloon">Saloon</option>
						<option value="Tank">Tank</option>
						<option value="Taxicab">Taxicab</option>
						<option value="Truck">Truck</option>
						<option value="Van">Van</option>
						<option value="VTOL">VTOL</option>
					</optgroup>
					<optgroup label="Weapons: Firearms">
						<option value="Flechette">Flechette</option>
						<option value="Grenade">Grenade</option>
						<option value="Needler">Needler</option>
						<option value="Pistol">Pistol</option>
						<option value="Revolver">Revolver</option>
						<option value="Rifle">Rifle</option>
						<option value="Rocket">Rocket</option>
						<option value="Shotgun">Shotgun</option>
						<option value="SMG">SMG</option>
						<option value="Taser">Taser</option>
					</optgroup>
					<optgroup label="Weapons: Hand">
						<option value="Axe">Axe</option>
						<option value="Baton">Baton</option>
						<option value="Brass Knucks">Brass Knucks</option>
						<option value="Chainsaw">Chainsaw</option>
						<option value="Cutter">Cutter</option>
						<option value="Razor Hands">Razor Hands</option>
						<option value="Sledgehammer">Sledgehammer</option>
						<option value="Switchblade">Switchblade</option>
						<option value="Sword">Sword</option>
						<option value="Throat Snake">Throat Snake</option>
					</optgroup>
					<optgroup label="Cyberware">
						<option value="Artificial Optics">Artificial Optics</option>
						<option value="Dermal Plating">Dermal Plating</option>
						<option value="Iron Heart">Iron Heart</option>
						<option value="Jacked Reflexes">Jacked Reflexes</option>
						<option value="Limbs">Limbs</option>
						<option value="Razor Hands">Razor Hands</option>
						<option value="Senses">Senses</option>
						<option value="Sex Mod">Sex Mod</option>
						<option value="Style Ware">Style Ware</option>
						<option value="Throat Snake">Throat Snake</option>
					</optgroup>
					<optgroup label="Skillsofts | Drugs">
						<option value="ABILITY Module">ABILITY Module</option>
						<option value="Alcohol">Alcohol</option>
						<option value="Aptitude">Aptitude</option>
						<option value="Hallucinogen">Hallucinogen</option>
						<option value="Knowledge">Knowledge</option>
						<option value="Opiate">Opiate</option>
						<option value="Personality">Personality</option>
						<option value="Psychotropic">Psychotropic</option>
						<option value="READY Chip">READY Chip</option>
						<option value="WILLING Soft">WILLING Soft</option>
					</optgroup>
					<optgroup label="Life | Style">
						<option value="Airport Coffin">Airport Coffin</option>
						<option value="Bodyguard">Bodyguard</option>
						<option value="Doll">Doll</option>
						<option value="Haute Cuisine">Haute Cuisine</option>
						<option value="Health Care">Health Care</option>
						<option value="High Fashion">High Fashion</option>
						<option value="Hotel Suite">Hotel Suite</option>
						<option value="Overalls">Overalls</option>
						<option value="Razor Doc">Razor Doc</option>
						<option value="Takeaway">Takeaway</option>
					</optgroup>
				</select>
			</div>
		);
	}
}



const mapStateToProps = ( state ) => {   
	return { 
		gear: state.gear.gear,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		addGear: (gear) => {
			dispatch(addGear(gear))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Gear);
