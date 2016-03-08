"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "pascalprecht.translate"])
.config(function ($routeProvider, $translateProvider) {
	$routeProvider.when("/", {
		templateUrl: "components/sellers/index.html",
		controller: "SellersController"
	}).when("/seller/:sellerID", {
		templateUrl: "components/seller-details/seller.html",
		controller: "SellersIdController"
	});
	$translateProvider.preferredLanguage('is');
	
});
 