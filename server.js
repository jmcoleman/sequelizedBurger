require('dotenv').config();

//////////////////////////
// dependencies
//////////////////////////
var express = require("express");
var bodyParser = require("body-parser");

// models are required to sync them
var db = require("./models");

///////////////////////
// configure Express
///////////////////////
var app = express();

// sets the port info
app.set('port', (process.env.PORT || 8080));

// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/assets/img')); 

/////////////////
// handlebars
/////////////////
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

////////////////////////////////////////////////////////
// Import routes and give the server access to them.
////////////////////////////////////////////////////////
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

////////////////////////////////////////////////////////////////////////////
// syncing our sequelize models and then start listening for requests
// use 'force: true' in sync call to override schema definition
////////////////////////////////////////////////////////////////////////////
db.sequelize.sync({ force: true }).then(function() {
    app.listen(app.get('port'), function() {
        console.log("App now listening at localhost: " + app.get('port'));
    });
});