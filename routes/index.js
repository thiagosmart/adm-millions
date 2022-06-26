
var express = require('express');
var router = express.Router();
var HomeController = require('../app/controllers/home_controller');


/* GET home page. */
router.get('/', HomeController.index);


module.exports = router;