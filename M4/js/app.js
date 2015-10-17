angular.module('MyApp', [])

	.constant('VERSION','1.1')

	.controller('HomeCtrl',['$scope',function($scope) {

		$scope.title = 'Wellcome to my page';

		$scope.discription = function(){

			return 'This is a home page';
		};		
		// body...
	}]);