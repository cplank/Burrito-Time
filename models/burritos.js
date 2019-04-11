const orm = require("../config/orm.js");

var burrito = {
    all: function (cb) {
        orm.all("burritos", cb);
    },

    create: function (row, cb) {
        console.log('about to create', row);
        orm.create("burritos", row, cb);
    },
    update: function (col, cond, cb) {
        orm.update("burritos", col, 'id', cond, cb);
    },
    delete: function (cond, cb) {
        orm.delete("burritos", cols, cond, cb);
    }
};


module.exports = burrito;
