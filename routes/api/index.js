const router = require("express").Router();
const roomRoutes = require("./rooms");
const searchRoutes = require("./searches");

router.use("/rooms", roomRoutes);
router.use("/searches", searchRoutes);

module.exports = router;