// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var friendsData = require("../data/friends");
var matchFinder = require("./matchFinder");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

    var newUser = req.body;

    var matchIndex = matchFinder(newUser.scores, friendsData);

    res.json(friendsData[matchIndex]);

    friendsData.push(newUser);

   });

}
