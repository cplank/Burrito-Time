const orm = require("../config/orm.js");

var burrito = {
    all: function (cb) {
        orm.all("burritos", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("burritos", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burritos", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (cols, condition, cb) {
        orm.delete("burritos", cols, condition, function (res) {
            cb(res);
        })
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burrito;
