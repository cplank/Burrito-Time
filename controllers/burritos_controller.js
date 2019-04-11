//requring express
var express = require("express");

//and our routes
var router = express.Router();

//and the burrito object exported from the model burritos.js
var burrito = require("../models/burritos.js")


//the get method on the root path
router.get("/", function (req, res) {

    //running the all function on burrito
    burrito.all(function (data) {

        //creating the handlebars object
        var hbsObject = {
            burritos: data
        };
        //rendering the handlebars object to the index page
        res.render("index", hbsObject);
    })
})

//the post method from the burritos path
router.post("/burritos", function (req, res) {

    //creating a copy of the req.body object but changing devoured to false
    const row = { ...req.body, devoured: false }

    //running the create function on burrito
    burrito.create(row, function (result) {

        //and then running burrito.all so our page is properly updated
        burrito.all(function (data) {
            var hbsObject = {
                burritos: data
            };
            res.render("index", hbsObject);
        })

    });
});

//the post method from the click route when a burrito button is pushed. The : is a placeholder
//for whatever the specific id will end up being
router.post("/burritos/:id", function (req, res) {

    //setting our condition. req.params.id returns a string so turning into an integer for the SQL query
    var condition = parseInt(req.params.id);

    //running the update function on burrito. Updating the burrito's devoured status to true
    burrito.update(
        {
            devoured: true
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                //error in case a button takes the user someplace weird
                return res.status(404).end();
            }
            //running burrito.all to update the page
            burrito.all(function (data) {
                var hbsObject = {
                    burritos: data
                };
                res.render("index", hbsObject);
            })

        }
    );
});

// Export routes for server.js to use.
module.exports = router;