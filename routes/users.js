/*
NOM : user.js
AUTEUR : Alexis Noel
DATE : 18 septembre 2023
VERSION : 0.1
DESCRIPTION : 
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
