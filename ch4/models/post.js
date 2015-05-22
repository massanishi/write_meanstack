var db = require('../db');
var Post = db.model('Post', {
	username: {type: String, required: true },
	body: { type: String, required: true },
	data: { type: Date, required: true, default: Date.now }
})

module.exports = Post;