"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "pascalprecht.translate"])
.config(function ($routeProvider, $translateProvider) {
	$routeProvider.when("/", {
		templateUrl: "components/sellers/index.html",
		controller: "SellersController"
	}).when("/seller/:sellerID", {
		templateUrl: "components/sellers-details/seller.html",
		controller: "SellersIdController"
	});

	/*$translateProvider.useStaticFilesLoader({
		prefix : "lang_",
		suffix: ".json"
	});
	$translateProvider.preferredLanguage('is');*/
});
 