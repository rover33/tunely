var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SongSchema = new Schema ({
  name: String,
  trackNumber: Number
});


module.exports = SongSchema;