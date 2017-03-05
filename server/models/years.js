var _ = require('lodash');
var Track = require('./tracks')

var years = (function() {
  var collection = [],
      keys = {},
      tracks,
      id = 1;

  tracks = Track.all();

  for (var i = 0; i < tracks.length; i++) {
    if (keys[tracks[i]['year']]) continue;

    keys[tracks[i]['year']] = true;
    collection.push({ "id": id, "name": tracks[i]['year'] });

    id++;
  };

  return collection;
})();

module.exports = {
  get: function(id) {
    return _.find(years, function(year){
      return year.id === id;
    });
  },
  all: function() {
    return years;
  }
};