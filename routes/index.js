var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.json({ title: "Do you what to change the World" });
});

module.exports = router;
