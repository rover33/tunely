var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AlbumSchema = new Schema ({
    artistName: String,
  name: String,
  releaseDate: String,
  genres: [ String ]
});

var Album = mongoose.model('album', AlbumSchema)

module.exports = Album;
