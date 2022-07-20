const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // sort: {
  //   type: String,
  //   required: true,
  // }
});

module.exports = mongoose.model('news', newsSchema)