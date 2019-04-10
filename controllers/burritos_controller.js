var express = require("express");

var router = express.Router();

// Import model (burger.js) to use its database functions
var burrito = require("../models/burritos")

// Create all routes and set up logic w/in those routes where required
router.get("/", function (req, res) {
    burrito.all(function (data) {
        var hbsObject = {
            burritos: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})

// This post route will add a new burger, need post function
router.post("/api/burritos", function (req, res) {
    burrito.create(["burrito_name", "devoured"], [req.body.burrito_name, req.body.devoured], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burritos/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burrito.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

// Export routes for server.js to use.
module.exports = router;