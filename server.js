require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");
const Faction = require("./data");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = express.Router();
const app = express();
const API_PORT = process.env.PORT || 3001;
const path = require("path");
const dbRoute = process.env.MONGO_URI;

//other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

// connects our back end code with the database
mongoose.connect(
	dbRoute,
	{useNewUrlParser: true}
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

//checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//post request to save user's faction
app.post("/api/new-faction", function(req,res) {

	let randomKey=generate()+generate()+generate();

	var factionToAdd = new Faction({
		passkey: randomKey,
		name: req.body.faction.name,
		identity: req.body.faction.identity,
		pCons: req.body.faction.pCon,
		nCons: req.body.faction.nCon,
		influence: req.body.faction.influence,
		motivation: req.body.faction.motivation,
		npc: req.body.faction.npc
	});

	charToAdd.save()
	.then(item => {
		res.send('success');
	})
	.catch(err => {
		res.status(400).send(err);
	});

	/*charToAdd.save((err, response) => {
		if (err) {
			console.log("error to database: " + err);
			return res.json({success: false, error: err});
		}
		console.log("success, response is: " + response);
		let condensedResponse = {
			"passkey": response.passkey
		};
		return res.json(condensedResponse);
	});*/
});

/*get request for user's markdown
app.get("/api/get-file", (req, res) => {

	console.log('recieved get request');

	var passkey=req.query.passkey;
	console.log(req.query);
	var query = Files.find();

	query=query.where("passkey").equals(passkey);

	query.exec((err, data) => {
		if (err) throw err;	
		console.log("success, response is: " + data);
		let condensedResponse = {
			"passkey": data.passkey,
			"markdown": data.markdown
		};
		return res.json(data);
	});
});

//this method overwrites existing entries in our database
app.post("/api/save-file", (req, res) => {
	var passkey = req.query.passkey;
	var update = req.query.update;

	Files.findOneAndUpdate(passkey, update, err => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true });
	});
});*/

//launch our backend into a port
app.listen(API_PORT, () => console.log("LISTENING ON PORT ${API_PORT}"));

//generates string of random letter a-z of string_length
function generate_random_string(string_length){
	let random_string = "";
	let random_ascii;
	for(let i = 0; i < string_length; i++) {
		random_ascii = Math.floor((Math.random() * 25) + 97);
		random_string += String.fromCharCode(random_ascii)
	}
	return random_string
}

//generates random number 1-9
function generate_random_number(){
	let num_low = 1;
	let num_high = 9;
	return Math.floor((Math.random() * (num_high - num_low)) + num_low);
}

//generates random string between 1-3 letters and random number (credit: https://codehandbook.org/generate-random-string-factions-in-javascript/ )
function generate() {
	return generate_random_string(Math.floor((Math.random()*3)+1)) + generate_random_number()
}