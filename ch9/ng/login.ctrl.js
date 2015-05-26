angular.module('app')
.controller('LoginCtrl', function($scope, UserSvc){
	$scope.login = function(username, password){
		UserSvc.login(username, password)
		.then(function(response){
			console.log('logged in');
			$scope.$emit('login', response.data)
		}, function(error){
			console.log(error);
		})
	}
})