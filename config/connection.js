var mysql = require('mysql');

// MySQL DB Connection Information
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "PassWord",
    database: "burrito_db"
});
// Initiate MySQL Connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;