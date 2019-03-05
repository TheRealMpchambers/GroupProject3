const mongoose = require("mongoose");
const db = require("../models");
const roomSeed = require("./seed.json");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/roomdirections"
);

db.Room
	.remove({})
	.then(() => db.Room.collection.insertMany(roomSeed))
	.then(data => {
		console.log(data.result);
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});