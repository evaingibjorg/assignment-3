"use strict";

angular.module("project3App").controller("LanguageController",
	function LanguageController($translate, $scope) {
		$scope.translateText = function(key) {
		$translate.use(key);
	};
});