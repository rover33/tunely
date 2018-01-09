var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SongSchema = new Schema ({
  name: String,
  track: Number
});


module.exports = SongSchema;