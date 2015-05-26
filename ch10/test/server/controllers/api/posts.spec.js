var Post = require('../../../../models/post');
var api = require('../../support/api');

describe('controllers.api.posts', function(){

	beforeEach(function(done){
		Post.remove({}, done);
	})

	describe('GET /api/posts', function() {
		beforeEach(function(done){
			var posts = [
			{body: 'post1', username:'dickeyxxx'},
			{body: 'post2', username:'dickeyxxx'},
			{body: 'post3', username:'dickeyxxx'}
			]
			Posts.create(posts, done);
		})
		it('exists', function(done){
			api.get('/api/posts')
			.expect(200)
			.end(done);
		})
	})
})

// var expect = require('chai').expect;
// var ctrl = require('../../../../controllers/api/posts');

// describe('controllers.api.posts', function(){
// 	it('exists', function(){
// 		expect(ctrl).to.exist;
// 	})
// })

// var request = require('supertest');
// var express = require('express');
// var app = express();

// app.get('/user', function(req,res){
// 	res.status(200).send({name:'dickeyxxx'})
// })

// describe('GET /users', function(){
// 	it('responds with proper json', function(done){
// 		request(app)
// 		.get('/user')
// 		.expect('Content-Type', /json/)
// 		.expect({name:'dickeyxxx'}, done)
// 	})
// })