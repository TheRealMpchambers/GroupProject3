const router = require("express").Router();
const roomRoutes = require("./rooms");

router.use("/rooms", roomRoutes);

module.exports = router;