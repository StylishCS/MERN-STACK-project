var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.sendFile("welcome.html", {
		root: "S:/downs/fsss-main/fsss-main/public/welcome",
	});
});

module.exports = router;
