var mongoose = require('mongoose');
var url = proces.env.MONGOLAB_URI || 'mongodb://localhost/social'
mongoose.connect(url)

module.exports = mongoose;