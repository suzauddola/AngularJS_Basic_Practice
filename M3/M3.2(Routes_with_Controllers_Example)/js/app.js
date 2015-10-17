var app = angular.module('MyApp', ['ngRoute']);
	

	app.config(['$routeProvider', function ($routeProvider) {

		$routeProvider.when('/',{
			controller : 'HomeCtrl',
			templateUrl : '/home.html'
		});
	}]);
	

	app.controller('HomeCtrl',['$scope',function($scope) {

		$scope.title = 'Wellcome to my page';

		$scope.discription = function(){

			return 'This is a home page';
		};		
		// body...
	}]);