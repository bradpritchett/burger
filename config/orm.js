// Import MySQL connection.
var connection = require("../config/connection.js");


var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            console.log("are we here?")
            if (err) {
                throw err;
            }
            console.log(result)
        });
    },
    insertOne: function () {

    },
    updateOne: function () {

    }

};

// Export the orm object for the model (cat.js).
module.exports = orm;
