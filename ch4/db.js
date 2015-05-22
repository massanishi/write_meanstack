var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/social', function (err) {
	if (err) return new Error(err);
	console.log('mongodb connected');
})
module.exports = mongoose;