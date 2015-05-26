angular.module('app')
.controller('LoginCtrl', function($scope, UserSvc, $location){
	$scope.login = function(username, password){
		UserSvc.login(username, password)
		.then(function(response){
			console.log('logged in');
			$scope.$emit('login', response.data);
			$location.url('/')
		}, function(error){
			console.log(error);
		})
	}
})