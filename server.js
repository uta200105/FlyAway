// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var helmet = require("helmet");

// Port
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname + "/public"));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Handlebars
var expresshbs = require("express-handlebars");

app.engine("handlebars", expresshbs({ defaultLayout: "main"}));

app.set("view engine", "handlebars");

// Route
var jetliner = require("./controllers/jetliner.js");

app.use(jetliner);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});