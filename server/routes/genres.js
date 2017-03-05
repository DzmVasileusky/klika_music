var Genre = require('../models/genres');

module.exports = function(app) {
  // Return a list of available node types
  app.get('/genres', function(req, res) {
    res.json(Genre.all());
  });

  app.get('/genres/:id', function(req, res) {
    res.json(Genre.get(req.param('id')) || {});
  });
};