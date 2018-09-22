var express = require("express");
var bodyParser = require("body-parser");
var helmet = require("helmet");

var jetliner = require("./controllers/jetliner.js");


var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var expresshbs = require("express-handlebars");

app.engine("handlebars", expresshbs({ defaultLayout: "main"}));

app.set("view engine", "handlebars");

app.use(jetliner);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});