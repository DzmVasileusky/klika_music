var _ = require('lodash');
var Track = require('./tracks')

var genres = (function() {
  var collection = [],
      keys = {},
      tracks,
      id = 1;

  tracks = Track.all();

  for (var i = 0; i < tracks.length; i++) {
    if (keys[tracks[i]['genre']]) continue;

    keys[tracks[i]['genre']] = true;
    collection.push({ "id": id, "name": tracks[i]['genre'] });

    id++;
  };

  return collection;
})();

module.exports = {
  get: function(id) {
    return _.find(genres, function(genre){
      return genre.id === id;
    });
  },
  all: function() {
    return genres;
  }
};