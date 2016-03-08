"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices"])
.config(function ($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "components/sellers/index.html",
		controller: "SellersController"
	}).when("/seller/:sellerID", {
		templateUrl: "components/sellers/seller.html",
		controller: "SellersIdController"
	});
});
