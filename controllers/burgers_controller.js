var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {

    burger.selectAll(function (data) {
        console.log("help")
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function (req, res) {

});

router.put("/api/burger/:id", function (req, res) {

});

// Export routes for server.js to use.
module.exports = router;
