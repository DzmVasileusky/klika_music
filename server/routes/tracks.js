var _ = require('lodash');
var Track = require('../models/tracks')

module.exports = function(app) {
  app.get('/tracks', function(req, res) {
    res.json(Track.all(req.query));
  });

  app.post('/tracks', function(req, res) {
    setTimeout(function(){
      res.json(Track.create(req.body));
    }, 1000);
  });

  app.put('/tracks/:id', function(req, res) {
    setTimeout(function(){
      res.json(Track.update(req.body));
    },1000)
  });

  app.get('/tracks/:id', function(req, res) {
    res.json(Track.get(req.param('id')) || {});
  });

  app.delete('/tracks/:id', function(req, res) {
    res.json(Track.delete(req.param('id')) || {});
  });
};
