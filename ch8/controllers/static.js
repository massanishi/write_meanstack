var express = require('express');
var router = express.Router();

// __dirname is node special variable to check the current file's directory
router.use(express.static(__dirname + '/../assets'))
router.use(express.static(__dirname + '/../templates'))

router.get('/', function(req, res){
    res.sendfile('layouts/app.html')
})
module.exports = router;