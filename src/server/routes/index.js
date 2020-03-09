const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
  response.send("main page");
  response.end();
});

module.exports = router;
