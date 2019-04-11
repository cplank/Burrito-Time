// Import MySQL connection.
var connection = require("../config/connection.js");


var orm = {
    //creating the select all query. Takes the table and a callback
    all: function (table, cb) {
        //building the SQL query string
        let queryString = "SELECT * FROM ??";
        //connection.query is a method of the MySQL.js. This method handles the ?? above
        //and sanitizes user input (or input it suspects came from a user).

        //takes the queryString, table, and a callback function
        connection.query(queryString, table, function (err, result) {
            //if there's an error during connection, throw the error
            if (err) {
                throw err;
            }
            //send the result to the callback function
            cb(result);
        })
    },

    //the create query. Takes the table, row, and a callback
    create: function (table, row, cb) {
        let queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [table, row], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })

    },

    //update query. Takes the table name, column value, column name (in this case id), condition, and callback
    update: function (table, colVal, whereCol, cond, cb) {
        //when I originally used ?? in this query for identifiers, id was returned with ` `, which created
        //a syntax error. To bypass that error, I manually called the sanitization method provided by 
        //MySQL.js
        let queryString = `UPDATE ?? SET ? WHERE ${connection.escapeId(whereCol)} = ?`;
        connection.query(queryString, [table, colVal, cond], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    //delete query. Takes table, condition, and callback
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

//export orm for use in burritos.js
module.exports = orm;