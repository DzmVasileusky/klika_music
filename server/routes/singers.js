var Singer = require('../models/singers');

module.exports = function(app) {
  // Return a list of available node types
  app.get('/singers', function(req, res) {
    res.json(Singer.all());
  });

  app.get('/singers/:id', function(req, res) {
    res.json(Singer.get(req.param('id')) || {});
  });
};