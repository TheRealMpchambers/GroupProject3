const router = require("express").Router();
const roomController = require("../../controllers/roomController")

router.route("/:query")
    .get(roomController.getRooms)
    .post(roomController.createRoom);

router.route("/survey")
		.get(roomController.getSurvey)
		.post(roomController.surveyResponse);

module.exports = router;