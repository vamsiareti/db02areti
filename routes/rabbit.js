var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("rabbit", { title: "Search Results Rabbit" });
});

module.exports = router;