const orm = require("../config/orm.js");

var burrito = {
    all: function (cb) {
        orm.all("burritos", cb);
    },

    create: function (row, cb) {
        orm.create("burritos", row, cb);
    },
    update: function (col, cond, cb) {
        orm.update("burritos", col, cond, cb);
    },
    delete: function (cond, cb) {
        orm.delete("burritos", cols, cond, cb);
    }
};


module.exports = burrito;
