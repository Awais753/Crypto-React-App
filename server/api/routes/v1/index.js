const express = require("express");
const collectionRoutes = require("./collection.route");
const assetRoutes = require("./asset.route");
const eventRoutes = require("./event.route");
const router = express.Router();

router.use("/assets", assetRoutes);
router.use("/collections", collectionRoutes);
router.use("/events", eventRoutes);

module.exports = router;
