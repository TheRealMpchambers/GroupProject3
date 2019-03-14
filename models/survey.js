const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
	question1: String,
	question2: String,
	question3: String,
	question4: String,
	question5: String,
	name: String,
	email: String
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;