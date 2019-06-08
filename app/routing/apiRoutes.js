// ===============================================================================
// ROUTING
// ===============================================================================
// Chirpy-1 activity for examples of how to format.

var connection = require("../config/connection")


module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "home"page.
    // In each of the below cases when a user visits a link
    // ---------------------------------------------------------------------------

    app.get('/api/beer', function(req, res){
        connection.query(
          `SELECT *
          FROM beer
          FULL JOIN breweries
          ON brewery_id = breweries.id
          ORDER BY brewery_id;`, function(err, data){
            if (err) {
              console.log(error)
              res.sendStatus(500)
              }
            else {
              res.json(data)
            }
          }
        )
    
      });

};