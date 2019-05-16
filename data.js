const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this is data structure for saving a character to database
var factionSchema = new Schema({    
	passkey: {
		type:String,
		required: true
	},
	name: {
		type:String,
		required:true
	},
	identity: {
		type:String,
		required:true
	},
	pCons: {
		type:Array,
		required:true
	},
	nCons: {
		type:Array,
		required:true
	},
	motivation: {
		type:String,
		required:true
	},
	influence: {
		type:Number,
		required:true
	},
	npc: {
		type:String,
		required:true
	}
});

//export the Schema
module.exports = mongoose.model("Faction", factionSchema);