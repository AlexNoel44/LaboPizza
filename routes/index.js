/*
NOM : index.js
AUTEUR : Alexis Noel
DATE : 18 septembre 2023
VERSION : 0.1
DESCRIPTION : Coté serveur de la pizzeria, s'occupe des requêtes et de leur traitement.
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {

  console.log(req.body.pizzaType);
  console.log(req.body.quantity);
  console.log(req.body.size);
  console.log(req.body.Ingredients);
  console.log(req.body.adress);
  console.log(req.body.postalCode);
  console.log(req.body.lastName);
  console.log(req.body.firstName);
  console.log(req.body.phone);
  console.log(req.body.mail);
  console.log(req.body.cashing);

  res.render('confirmation', {
    pizzaType: req.body.pizzaType,
    quantity: req.body.quantity,
    size: req.body.size,
    Ingredients: req.body.Ingredients,
    adress: req.body.adress,
    postalCode: req.body.postalCode,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    phone: req.body.phone,
    mail: req.body.mail,
    cashing: req.body.cashing
  });
  
});

module.exports = router;
