var express = require("express");
var jets = require("../models/jets.js");

var router = express.Router();

router.get("/", function(req, res) {
    res.render("index");
});

router.post("/api/flight", function(req, res) {
    jets.create(["name"], [req.body.name], function(results) {
        res.json({name: results.name});
    });
})














module.exports = router;






