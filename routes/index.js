const router = require("express").Router();

const apiRoutes = require("../routes/api");
const homeRoutes = require("./html.routes");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;
