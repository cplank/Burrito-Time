// / Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8008;

//set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content (images, etc) for the app from the 'public directory - then on the main.handlebars page, anytime you reference a path from the public file, you don't need to write public, just, for ex: /assets/css/burger_style.css
app.use(express.static("public"));



// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burritos_controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});