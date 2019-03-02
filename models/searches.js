const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchesSchema = new Schema({
    user: {type: String, required: true},
    searches: {type: [String], default: null}
});

const Searches = mongoose.model("Searches", searchesSchema);

module.exports = Searches;