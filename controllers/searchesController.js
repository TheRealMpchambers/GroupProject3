const db = require("../models");

module.exports = {

    getSearches: function(req, res) {
        db.Searches
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    submitSearch: function(req, res) {
        db.Searches
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}