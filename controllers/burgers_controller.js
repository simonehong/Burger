// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// Create the routes and associated logic
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post("/burgers/create", function(req, res){
  burger.insertOne(req.body.burger_name, function(result){
    console.log(result)
    res.redirect("/")
  })
});

router.delete("/burger/:id", function(req, res) {
  burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbAuthor) {
    res.jredirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;