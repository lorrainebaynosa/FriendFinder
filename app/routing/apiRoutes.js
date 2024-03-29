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
  // In each of the below cases when a user visits the api/friends link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the friends array with a get request
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have friends or not.
    // req.body is available since we're using the body parsing middleware
    var userInput = req.body;
    // userInput = {
    //   name: req.body.name,
    //   photo: req.body.photo,
    //   scores: req.body.scores
    // }

    var totalDifference = 0;
    var compatibility = [];
    for (var i = 0; i < friends.length; i++) {
      var scores = [];
      for (var j = 0; j < friends[i].scores.length; j++) {
        scores.push((Math.abs(parseInt(friends[i].scores[j]) - parseInt(req.body.scores[j]))));
      }
      console.log("Scores:" + scores);
      var totalDifference = scores.reduce((total, match) => total + match, 0)
      console.log("Sum of Absolute Differences:" + totalDifference);
      compatibility.push(totalDifference);
    }
    // Match with least amount of difference is the best match.
    var bestMatch = Math.min.apply(null, compatibility);
    console.log("Best Match: " + bestMatch);
    // The indexOf() method returns the first index at which a given element 
    // can be found in the array.
    var matchIndex = compatibility.indexOf(bestMatch)
    console.log("Match Index:" + matchIndex);
    console.log("Compatibility:" + compatibility);
    friends.push(req.body);
    res.json(friends[matchIndex]);
  });
}
  
