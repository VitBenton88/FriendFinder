// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");

// Tells node that we are creating an "express" server
var app = express();

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

// Sets an initial port.
var PORT = process.env.PORT || 3000;

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" the server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
