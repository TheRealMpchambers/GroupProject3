const router = require("express").Router();
const db = require("../../models");

router.route("/")
.get(
    db.Room.find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => console.log(err))
    )
.post(
    db.Room.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => console.log(err))
    );

module.exports = router;