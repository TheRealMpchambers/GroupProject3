const db = require("../models");

module.exports = {

    getRooms: function(req, res) {
        console.log(req);
        db.Room
        .findOne({"destination": req.params.query}, function(err, result){
            if (err) {console.log(err)};
            res.json(result); 
        })  
        // .then(dbModel => res.json(dbModel))
        // .catch(err => res.status(422).json(err));
    },

    createRoom: function(req, res) {
        db.Room
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}