var connection = require("./connection.js")

var orm = {
    selectAll: function (cb) {
        connection.query(
            `SELECT *
            FROM beer
            FULL JOIN breweries
            ON brewery_id = breweries.id
            ORDER BY brewery_id;`, function (err, data) {
                if (err) {
                    console.log(error)
                    res.sendStatus(500)
                }

                cb(data);

            });
    },

    selectOne: function(searchterm, searchtype, cb){
        connection.query(
            `SELECT *
            FROM beer
            FULL JOIN breweries
            ON brewery_id = breweries.id
            WHERE ${searchtype} LIKE ${searchterm};`, function (err, data) {
                if (err) {
                    console.log(error)
                    res.sendStatus(500)
                }

                cb(data);

            });
}


};

module.exports = orm;
