var express = require('express');
var app = express();

// Load Express Configuration
require('./expressConfig')(app, express);

// Root route
app.get('/', function(req, res){
  res.sendfile('index.html', {root: app.settings.views});
});

// Load routes
require('./routes/tracks')(app);
require('./routes/genres')(app);
require('./routes/singers')(app);
require('./routes/years')(app);

module.exports = app;
