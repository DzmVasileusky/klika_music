var Year = require('../models/years');

module.exports = function(app) {
  // Return a list of available node types
  app.get('/years', function(req, res) {
    res.json(Year.all());
  });

  app.get('/years/:id', function(req, res) {
    res.json(Year.get(req.param('id')) || {});
  });
};