const express = require("express");
const controller = require("../../controllers/asset.controller");
const router = express.Router();

router
  .route("/")
  .get(controller.assets);

  
module.exports = router;
