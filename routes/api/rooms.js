const router = require("express").Router();
const roomController = require("../../controllers/roomController")

router.route("/:query")
    .get(roomController.getRooms)
    .post(roomController.createRoom);

module.exports = router;