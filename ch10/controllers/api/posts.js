var Post = require('../../models/post');
var router = require('express').Router();
var websockets = require('../../websockets')

router.get('/', function(req, res, next) {
    Post.find().sort('-date').exec(function(err, posts) {
        if (err) return next(err);
        res.status(200).json(posts)
    })
})

router.post('/', function(req, res) {
    var post = new Post({
        body: req.body.body
    })
     post.username = req.auth.username;
    //post.username = req.auth ? req.auth.username : 'dickeyxxx';
    post.save(function(err, post) {
        if (err) 
            return next(err)
        console.log('posted');
        websockets.broadcast('new_post', post);
        res.status(201).json(post)
    })
})

module.exports = router;