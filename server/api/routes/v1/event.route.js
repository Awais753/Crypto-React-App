const express = require("express");
const controller = require("../../controllers/event.controller");
const router = express.Router();

router
  .route("/")
  .get(controller.events);

  
module.exports = router;
