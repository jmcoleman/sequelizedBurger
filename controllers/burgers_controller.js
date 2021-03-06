var express = require("express");
var router = express.Router();

// import the model to use its db function
// var burger = require("../models/burger.js");
var db = require("../models");

// =============================================================
// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/customer-api-routes.js")(app);
// require("./routes/burger-api-routes.js")(app);




//////////////////////////
// create routes
//////////////////////////

// get all burgers
router.get("/", function(req, res) {
  console.log("in root route");

  // burger.all(function(data) {
  //   var hbsObject = {
  //     burgers: data
  //   };
    // console.log(hbsObject);
    // res.render("index", hbsObject);
  // });

  db.Burger.findAll({
    // include: [db.Author]
  }).then(function(dbBurger) {
    console.log(dbBurger);
    
    res.render("index", dbBurger);
  });
});

// create a new burger
router.post("/api/burgers", function(req, res) {
  console.log("in api/burgers route on post");
  console.log(req.body);

  // burger.create(["burger_name"], [req.body.burger_name], function(result) {
      // Send back the ID of the new quote
      // res.json({ id: result.insertId });
  //     res.redirect('/');
  // });
  db.Customer.create(req.body).then(function(dbCustomer) {
    console.log("Customer created!!!");

    db.Burger.create(req.body).then(function(dbBurger) {
      res.json(dbBurger);
    });

  });

});

// update burger 
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
      devoured: req.body.devoured
    }, 
    condition, 
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        // res.status(200).end();
        res.redirect(200, '/');
      }
    });
});
  
// delete a burger
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      // res.status(200).end();
      res.redirect(200, '/');
    }
  });
});
  
module.exports = router;