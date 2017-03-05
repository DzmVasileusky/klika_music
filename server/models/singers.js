var _ = require('lodash');
var Track = require('./tracks')

var singers = (function() {
  var collection = [],
      keys = {},
      tracks,
      id = 1;

  tracks = Track.all();

  for (var i = 0; i < tracks.length; i++) {
    if (keys[tracks[i]['singer']]) continue;

    keys[tracks[i]['singer']] = true;
    collection.push({ "id": id, "name": tracks[i]['singer'] });

    id++;
  };

  return collection;
})();

module.exports = {
  get: function(id) {
    return _.find(singers, function(singer){
      return singer.id === id;
    });
  },
  all: function() {
    return singers;
  }
};