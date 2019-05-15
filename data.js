const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this is data structure for saving a character to database
var charSchema = new Schema({    
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
	gear: {
		type:Array,
		required:true
	},
	motivation: {
		type:String,
		required:true
	},
	goal: {
		type:String,
		required:true
	},
	ready: {
		type:Number,
		required:true
	},
	willing: {
		type:Number,
		required:true
	},
	able: {
		type:Number,
		required:true
	},
	points: {
		type: Number,
		required:true,
    	max: [0, 'unspent points']
	}
});

//export the Schema
module.exports = mongoose.model("Character", charSchema);