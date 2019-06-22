// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// This data source hold the array of information on friends.
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have friends or not.
    // req.body is available since we're using the body parsing middleware
    var compatibility = [];
    for (var i = 0; i < friends.length; i++) {
      var scores = [];
      for (var j = 0; j < friends[i].scores.length; j++) {
        scores.push((Math.abs(parseInt(friends[i].scores[j]) - parseInt(req.body.scores[j]))));
      }
      console.log("Scores:" + scores);
      var totalDifference = scores.reduce((total, match)=> total + match, 0)
      console.log("Total Difference:" + totalDifference);
      compatibility.push(totalDifference);
    }
    console.log("Compatibility:" + compatibility);
    friends.push(req.body);
  });
}

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.

  // app.post("/api/clear", function(req, res) {
  //   // Empty out the arrays of data
  //   friends.length = [];

  //   res.json({ ok: true });
  // });
