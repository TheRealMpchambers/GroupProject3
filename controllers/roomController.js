const db = require("../models");

module.exports = {

    getRooms: function(req, res) {
        db.Room
        .find(req.query)  
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    createRoom: function(req, res) {
        db.Room
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}