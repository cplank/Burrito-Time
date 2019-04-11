// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    all: function (table, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, table, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    create: function (table, row, cb) {
        let queryString = "INSERT INTO ?? SET ?";
        // row: {thing: value} -> thing="value"
        connection.query(queryString, [table, row], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })

    },

    update: function (table, colVal, id, cond, cb) {
        let queryString = `UPDATE ?? SET ? WHERE ${connection.escapeId(id)} = ?`;
        // cond: {id: whatever} ==> id = "whatever"
        connection.query(queryString, [table, colVal, cond], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    delete: function (table, cond, cb) {
        var queryString = "DELETE FROM ?? WHERE ?";

        connection.query(queryString, [table, cond], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;