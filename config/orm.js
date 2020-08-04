// Import MySQL connection.
var connection = require("../config/connection.js");
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}



var orm = {
    selectAll: function (cb) {

        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (cols, vals, cb) {

        var queryString = "INSERT INTO burgers";

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });

    },
    updateOne: function (id, cb) {
        var queryString = "UPDATE burgers";
        queryString += " SET DEVOURED = 1";
        queryString += " WHERE id = " + id;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }

};

// Export the orm object for the model (cat.js).
module.exports = orm;
