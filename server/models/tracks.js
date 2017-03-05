var _ = require('lodash');

var tracks = [
  { "id": "1", "name": "Rudolph, The Red-nosed Reindeer", "singer": "Gene Autry ", "year": "1950", "genre": "folk" },
  { "id": "2", "name": "I Can Dream, Can't I", "singer": "The Andrews Sisters", "year": "1950", "genre": "jazz" },
  { "id": "3", "name": "Rag Mop", "singer": "Ames Brothers", "year": "1950", "genre": "pop" },
  { "id": "4", "name": "Chattanoogie Shoe Shine Boy", "singer": "Red Foley", "year": "1950", "genre": "jazz" },
  { "id": "5", "name": "Music! Music! Music!", "singer": "Teresa Brewer", "year": "1950", "genre": "jazz" },
  { "id": "6", "name": "If I Knew You Were Comin' I'd've Baked a Cake", "singer": "Eileen Barton", "year": "1950", "genre": "jazz" },
  { "id": "7", "name": "The Third Man Theme", "singer": "Anton Karas", "year": "1950", "genre": "jazz" },
  { "id": "8", "name": "Mona Lisa (Nat King Cole song)", "singer": "Nat King Cole", "year": "1950", "genre": "jazz" },
  { "id": "9", "name": "Goodnight Irene", "singer": "Gordon Jenkins and The Weavers ", "year": "1950", "genre": "folk" },
  { "id": "10", "name": "Harbor Lights", "singer": "Sammy Kaye ", "year": "1950", "genre": "folk" },
  { "id": "11", "name": "The Thing", "singer": "Phil Harris", "year": "1950", "genre": "folk" },
  { "id": "12", "name": "The Tennessee Waltz", "singer": "Patti Page ", "year": "1950", "genre": "folk" },
  { "id": "13", "name": "If", "singer": "Perry Como ", "year": "1951", "genre": "rock'n'roll" },
  { "id": "14", "name": "Be My Love", "singer": "Mario Lanza", "year": "1951", "genre": "pop" },
  { "id": "15", "name": "How High The Moon", "singer": "Les Paul and Mary Ford ", "year": "1951", "genre": "pop" },
  { "id": "16", "name": "Too Young", "singer": "Nat King Cole", "year": "1951", "genre": "rock'n'roll" },
  { "id": "17", "name": "Come On-a My House", "singer": "Rosemary Clooney ", "year": "1951", "genre": "rock'n'roll" },
  { "id": "18", "name": "Because Of You", "singer": "Tony Bennett ", "year": "1951", "genre": "jazz" },
  { "id": "19", "name": "Cold, Cold Heart", "singer": "Tony Bennett ", "year": "1951", "genre": "jazz" },
  { "id": "20", "name": "Sin", "singer": "Eddy Howard", "year": "1951", "genre": "jazz" },
  { "id": "21", "name": "Cry", "singer": "Johnnie Ray and The Four Lads", "year": "1951", "genre": "jazz" },
  { "id": "22", "name": "Wheel Of Fortune", "singer": "Kay Starr", "year": "1952", "genre": "jazz" },
  { "id": "23", "name": "Blue Tango", "singer": "Leroy Anderson ", "year": "1952", "genre": "jazz" },
  { "id": "24", "name": "Here In My Heart", "singer": "Al Martino ", "year": "1952", "genre": "jazz" },
  { "id": "25", "name": "Delicado", "singer": "Percy Faith", "year": "1952", "genre": "folk" },
  { "id": "26", "name": "Auf Wiederseh'n Sweetheart", "singer": "Vera Lynn", "year": "1952", "genre": "folk" },
  { "id": "27", "name": "You Belong To Me", "singer": "Jo Stafford", "year": "1952", "genre": "jazz" },
  { "id": "28", "name": "I Went To Your Wedding", "singer": "Patti Page ", "year": "1952", "genre": "jazz" },
  { "id": "29", "name": "It's In The Book (parts 1 & 2)", "singer": "Johnny Standley", "year": "1952", "genre": "pop" },
  { "id": "30", "name": "Why Don't You Believe Me", "singer": "Joni James ", "year": "1952", "genre": "pop" },
  { "id": "31", "name": "I Saw Mommy Kissing Santa Claus", "singer": "Jimmy Boyd ", "year": "1952", "genre": "jazz" },
  { "id": "32", "name": "Don't Let the Stars Get in Your Eyes", "singer": "Perry Como ", "year": "1953", "genre": "jazz" },
  { "id": "33", "name": "Till I Waltz Again With You", "singer": "Teresa Brewer", "year": "1953", "genre": "jazz" },
  { "id": "34", "name": "The Doggie In The Window", "singer": "Patti Page ", "year": "1953", "genre": "rock'n'roll" },
  { "id": "35", "name": "The Song From Moulin Rouge (Where Is Your Heart)", "singer": "Percy Faith", "year": "1953", "genre": "rock'n'roll" },
  { "id": "36", "name": "I'm Walking Behind You", "singer": "Eddie Fisher ", "year": "1953", "genre": "rock'n'roll" },
  { "id": "37", "name": "Vaya Con Dios (May God Be With You)", "singer": "Les Paul and Mary Ford ", "year": "1953", "genre": "pop" },
  { "id": "38", "name": "St. George And The Dragonet", "singer": "Stan Freberg ", "year": "1953", "genre": "pop" },
  { "id": "39", "name": "Rags To Riches", "singer": "Tony Bennett ", "year": "1953", "genre": "jazz" },
  { "id": "40", "name": "Oh! My Pa-pa (O Mein Papa)", "singer": "Eddie Fisher ", "year": "1954", "genre": "jazz" },
  { "id": "41", "name": "Secret Love", "singer": "Doris Day", "year": "1954", "genre": "jazz" },
  { "id": "42", "name": "Make Love To Me!", "singer": "Jo Stafford", "year": "1954", "genre": "jazz" },
  { "id": "43", "name": "Wanted", "singer": "Perry Como ", "year": "1954", "genre": "jazz" },
  { "id": "44", "name": "Little Things Mean A Lot", "singer": "Kitty Kallen ", "year": "1954", "genre": "folk" },
  { "id": "45", "name": "Sh-Boom", "singer": "The Crew Cuts", "year": "1954", "genre": "folk" },
  { "id": "46", "name": "Hey There", "singer": "Rosemary Clooney ", "year": "1954", "genre": "folk" },
  { "id": "47", "name": "This Ole House", "singer": "Rosemary Clooney ", "year": "1954", "genre": "folk" },
  { "id": "48", "name": "I Need You Now", "singer": "Eddie Fisher ", "year": "1954", "genre": "jazz" },
  { "id": "49", "name": "Mr. Sandman", "singer": "The Chordettes ", "year": "1954", "genre": "jazz" },
  { "id": "50", "name": "Let Me Go, Lover!", "singer": "Joan Weber ", "year": "1955", "genre": "jazz" },
  { "id": "51", "name": "Hearts Of Stone", "singer": "The Fontane Sisters", "year": "1955", "genre": "jazz" },
  { "id": "52", "name": "Sincerely", "singer": "The McGuire Sisters", "year": "1955", "genre": "jazz" },
  { "id": "53", "name": "The Ballad Of Davy Crockett", "singer": "Bill Hayes ", "year": "1955", "genre": "rock'n'roll" },
  { "id": "54", "name": "Cherry Pink And Apple Blossom White", "singer": "Pérez Prado", "year": "1955", "genre": "rock'n'roll" },
  { "id": "55", "name": "(We're Gonna) Rock Around The Clock", "singer": "Bill Haley & His Comets", "year": "1955", "genre": "rock'n'roll" },
  { "id": "56", "name": "The Yellow Rose of Texas", "singer": "Mitch Miller ", "year": "1955", "genre": "rock'n'roll" },
  { "id": "57", "name": "Love Is A Many Splendored Thing", "singer": "The Four Aces", "year": "1955", "genre": "pop" },
  { "id": "58", "name": "Autumn Leaves", "singer": "Roger Williams ", "year": "1955", "genre": "pop" },
  { "id": "59", "name": "Sixteen Tons", "singer": "Tennessee Ernie", "year": "1955", "genre": "rock'n'roll" },
  { "id": "60", "name": "Memories Are Made Of This", "singer": "Dean Martin", "year": "1956", "genre": "rock'n'roll" },
  { "id": "61", "name": "Rock And Roll Waltz", "singer": "Kay Starr", "year": "1956", "genre": "jazz" },
  { "id": "62", "name": "Lisbon Antigua", "singer": "Nelson Riddle", "year": "1956", "genre": "jazz" },
  { "id": "63", "name": "Poor People Of Paris", "singer": "Les Baxter ", "year": "1956", "genre": "folk" },
  { "id": "64", "name": "Heartbreak Hotel", "singer": "Elvis Presley", "year": "1956", "genre": "folk" },
  { "id": "65", "name": "The Wayward Wind", "singer": "Gogi Grant ", "year": "1956", "genre": "folk" },
  { "id": "66", "name": "I Want You, I Need You, I Love You", "singer": "Elvis Presley", "year": "1956", "genre": "folk" },
  { "id": "67", "name": "My Prayer", "singer": "The Platters ", "year": "1956", "genre": "folk" },
  { "id": "68", "name": "Don't Be Cruel/Hound Dog", "singer": "Elvis Presley", "year": "1956", "genre": "jazz" },
  { "id": "69", "name": "Love Me Tender", "singer": "Elvis Presley", "year": "1956", "genre": "jazz" },
  { "id": "70", "name": "Singing The Blues", "singer": "Guy Mitchell ", "year": "1956", "genre": "pop" },
  { "id": "71", "name": "Too Much", "singer": "Elvis Presley", "year": "1957", "genre": "pop" },
  { "id": "72", "name": "Young Love", "singer": "Tab Hunter ", "year": "1957", "genre": "folk" },
  { "id": "73", "name": "Party Doll", "singer": "Buddy Knox ", "year": "1957", "genre": "folk" },
  { "id": "74", "name": "Round And Round", "singer": "Perry Como ", "year": "1957", "genre": "rock'n'roll" },
  { "id": "75", "name": "All Shook Up", "singer": "Elvis Presley", "year": "1957", "genre": "rock'n'roll" },
  { "id": "76", "name": "Love Letters In The Sand", "singer": "Pat Boone", "year": "1957", "genre": "rock'n'roll" },
  { "id": "77", "name": "(Let Me Be Your) Teddy Bear", "singer": "Elvis Presley", "year": "1957", "genre": "jazz" },
  { "id": "78", "name": "Tammy", "singer": "Debbie Reynolds", "year": "1957", "genre": "jazz" },
  { "id": "79", "name": "Diana", "singer": "Paul Anka", "year": "1957", "genre": "jazz" },
  { "id": "80", "name": "That'll Be The Day", "singer": "The Crickets ", "year": "1957", "genre": "jazz" },
  { "id": "81", "name": "Honeycomb", "singer": "Jimmie Rodgers ", "year": "1957", "genre": "jazz" },
  { "id": "82", "name": "Wake Up Little Susie", "singer": "The Everly Brothers", "year": "1957", "genre": "folk" },
  { "id": "83", "name": "Jailhouse Rock/Treat Me Nice", "singer": "Elvis Presley", "year": "1957", "genre": "folk" },
  { "id": "84", "name": "You Send Me", "singer": "Sam Cooke", "year": "1957", "genre": "jazz" },
  { "id": "85", "name": "April Love", "singer": "Pat Boone", "year": "1957", "genre": "pop" },
  { "id": "86", "name": "At The Hop", "singer": "Danny & the Juniors", "year": "1958", "genre": "jazz" },
  { "id": "87", "name": "Don't/I Beg Of You", "singer": "Elvis Presley", "year": "1958", "genre": "jazz" },
  { "id": "88", "name": "Tequila", "singer": "The Champs ", "year": "1958", "genre": "jazz" },
  { "id": "89", "name": "Twilight Time", "singer": "The Platters ", "year": "1958", "genre": "rock'n'roll" },
  { "id": "90", "name": "Witch Doctor", "singer": "David Seville", "year": "1958", "genre": "rock'n'roll" },
  { "id": "91", "name": "All I Have To Do Is Dream", "singer": "The Everly Brothers", "year": "1958", "genre": "rock'n'roll" },
  { "id": "92", "name": "The Purple People Eater", "singer": "Sheb Wooley", "year": "1958", "genre": "jazz" },
  { "id": "93", "name": "Hard Headed Woman", "singer": "Elvis Presley", "year": "1958", "genre": "jazz" },
  { "id": "94", "name": "The Freewheelin’ Bob Dylan", "singer": "Bob Dylan", "year": "1958", "genre": "rock'n'roll" },
  { "id": "95", "name": "Bringing It All Back Home", "singer": "Bob Dylan", "year": "1958", "genre": "rock'n'roll" },
  { "id": "96", "name": "Self Portrait", "singer": "Bob Dylan", "year": "1958", "genre": "rock'n'roll" },
  { "id": "97", "name": "New Morning", "singer": "Bob Dylan", "year": "1959", "genre": "rock'n'roll" },
  { "id": "98", "name": "Desire", "singer": "Bob Dylan", "year": "1959", "genre": "rock'n'roll" },
  { "id": "99", "name": "Saved", "singer": "Bob Dylan", "year": "1959", "genre": "rock'n'roll" },
  { "id": "100", "name": "Shot of Love", "singer": "Bob Dylan", "year": "1959", "genre": "rock'n'roll" }
];

module.exports = {
  get: function(id) {
    return _.find(buildTracks(), function(track){
      return track.id === id;
    });
  },
  all: function() {
    return tracks;
  },
  update: function(track) {
    var updatedTrack;
    for(var i=0, l=tracks.length; i < l; i++) {
      if(tracks[i].id === track.id){
        _.assign(tracks[i], track);
        updatedTrack = tracks[i];
        break;
      }
    }
    return updatedTrack;
  },
  delete: function(id) {
    var deletedTrack;
    for(var i=0, l=tracks.length; i < l; i++) {
      if(tracks[i].id === id){
        deletedTrack = tracks[i];
        tracks.splice(i, 1);
        break;
      }
    }
    return deletedTrack;
  },
  create: function(track) {
    track.id = tracks.length + 1;
    tracks.push(track)
    return track;
  }
}
