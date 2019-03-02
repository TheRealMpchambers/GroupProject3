const router = require("express").Router();
const roomRoutes = require("./rooms");

router.use("/rooms/query", roomRoutes);

module.exports = router;