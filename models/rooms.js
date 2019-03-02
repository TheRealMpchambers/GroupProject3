const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    destination: {type: String, required: true},
    floor: {type: Number},
    map: {type: String, required: true},
    dirOne: {type: String},
    dirTwo: {type: String},
    dirThree: {type: String},
    dirFour: {type: String}
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;