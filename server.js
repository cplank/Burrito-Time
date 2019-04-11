// / dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// create an instance of the express app.
var app = express();

// set the port
var PORT = process.env.PORT || 8008;

//set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static files
app.use(express.static("public"));

// set handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give the server access to them.
var routes = require("./controllers/burritos_controller.js");
app.use(routes);

//start the server!
app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});