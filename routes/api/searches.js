const router = require("express").Router();
const searchesController = require("../../controllers/searchesController");

router.route("/")
    .get(searchesController.getSearches)
    .post(searchesController.submitSearch);

module.exports = router;