var express = require("express");
var router = express.Router();
const {getAbout, contact} = require('../controllers/aboutController');

/* GET home page. */
router.get("/", getAbout);
router.post("/", contact);

module.exports = router;
