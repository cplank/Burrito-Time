//requiring the orm exported by orm.js
const orm = require("../config/orm.js");

//creating the burrito object full of the SQL queries 
var burrito = {
    all: function (cb) {
        orm.all("burritos", cb);
    },

    create: function (row, cb) {

        orm.create("burritos", row, cb);
    },
    update: function (col, cond, cb) {
        orm.update("burritos", col, 'id', cond, cb);
    },
    delete: function (cond, cb) {
        orm.delete("burritos", cols, cond, cb);
    }
};

//export the burrito object for use in burritos_controller
module.exports = burrito;
