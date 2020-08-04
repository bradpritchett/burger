
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            console.log("model")
            cb(res);
        });
    },

};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
