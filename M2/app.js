angular.module('MyApp', []);

	.constant('VERSION','1.0')

	.run(function(VERSION) {
		alert(VERSION);
	});