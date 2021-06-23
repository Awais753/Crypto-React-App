const express = require("express");
const controller = require("../../controllers/collection.controller");

const router = express.Router();

router
  .route("/")
  .get(controller.collections);


module.exports = router;
