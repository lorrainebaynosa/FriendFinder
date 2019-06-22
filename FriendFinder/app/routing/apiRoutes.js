// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have friends or not.
    // req.body is available since we're using the body parsing middleware
      friends.push(req.body);
      // for (var i = 0; i <friends.scores.length; i++) {
    //   var friendsScore = friends.scores[i];
    //   for (var j= 0; j , newFriend.scores.length; j++){
    //     var newFriendScore = userScores[j];
    //   }
    //   // We calculate the difference between the scores and sum them into the totalDifference
    //   totalDifference += Math.abs(parseInt(friendsScore) - parseInt(newFriendScore));
      // res.json(newFriend);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.

  // app.post("/api/clear", function(req, res) {
  //   // Empty out the arrays of data
  //   friends.length = [];

  //   res.json({ ok: true });
  // });
};
