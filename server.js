var express = require("express");
var bodyParser = require("body-parser");
var helmet = require("helmet");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var expresshbs = require("express-handlebars");

app.engine("handlebars", expresshbs({ defaultLayout: "main"}));

app.set("view engine", "handlebars");

require("./controllers/jetliner.js")(app);

app.get("/", function(req, res) {
    res.send("<h1> Hello World </h1>")
});

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});