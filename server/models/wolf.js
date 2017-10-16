var mongoose = require('mongoose');

var DashSchema = new mongoose.Schema({
  name: String,
  color: String,
  age: Number,
});

var wolves = mongoose.model('Wolves', DashSchema);
