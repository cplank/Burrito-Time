var express = require("express");

var router = express.Router();


var burrito = require("../models/burritos.js")


router.get("/", function (req, res) {
    burrito.all(function (data) {
        var hbsObject = {
            burritos: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})


router.post("/burritos", function (req, res) {
    // res.send(req.body);
    const row = { ...req.body, devoured: false }
    burrito.create(row, function (result) {
        console.log(result)
        res.json({ id: result.insertId });

    });
});

router.post("/burritos/:id", function (req, res) {
    var condition = parseInt(req.params.id);
    console.log("condition", condition);

    burrito.update(
        {
            devoured: true
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            burrito.all(function (data) {
                var hbsObject = {
                    burritos: data
                };
                console.log(hbsObject);
                res.render("index", hbsObject);
            })

        }
    );
});

// Export routes for server.js to use.
module.exports = router;