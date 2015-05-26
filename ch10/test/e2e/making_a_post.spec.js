var db = require('../../db');
var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;

describe('making a post', function() {
    it('logs in and creates a new post', function() {
        browser.get('http://localhost:3001')
            // click login
        element(by.css('nav .login')).click();
        // browser.pause();

        // fill out and submit login form
        element(by.model('username')).sendKeys('dickeyxxx');
        element(by.model('password')).sendKeys('pass');
        element(by.css('form .btn')).click();

        // submit a new post on the posts page
        // math random is to further enforce that the post is not the previous post: 'my new post'
        var post = 'my new post' + Math.random();
        element(by.model('postBody')).sendKeys(post);
        element(by.css('form .btn')).click();

        // the user should nwo see their post as the first post on the page
        expect(element.all(by.css('ul.list-group li')).first().getText()).to.eventually.contain(post);
    })

    afterEach(function() {
        db.connection.db.dropDatabase();
 
        // var user = db.Schema({
        //     username: {
        //         type: String,
        //         requried: true
        //     },
        //     password: {
        //         type: String,
        //         required: true,
        //         select: false
        //     }
        // })
        
        // var User = db.model('User', user);
        // user = new User({
        // 	username: 'dickeyxxx',
        // 	password: 'pass'
        // })
    })
})