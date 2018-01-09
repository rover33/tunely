var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var song = require('./song')

var AlbumSchema = new Schema ({
    artistName: String,
  name: String,
  releaseDate: String,
  genres: [ String ],
  songs: [ song ]
});

var Album = mongoose.model('album', AlbumSchema)

module.exports = Album;
