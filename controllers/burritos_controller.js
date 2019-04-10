var express = require("express");

var router = express.Router();


var burrito = require("../models/burritos")


router.get("/", function (req, res) {
    burrito.all(function (data) {
        var hbsObject = {
            burritos: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})


router.post("/api/burritos", function (req, res) {

    burrito.create(["burrito_name", "devoured"], [req.body.burrito_name, req.body.devoured], function (result) {

        console.log(res.json({ id: result.insertId }));

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