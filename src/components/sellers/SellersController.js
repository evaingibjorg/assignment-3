"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $routeParams, $uibModal, $location, $translate, $rootScope, centrisNotify, SellerDlg) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

	$scope.onAddSeller = function onAddSeller() {

			SellerDlg.show().then(function(seller) {
				AppResource.addSeller(seller).success(function(sellerInfo) {
					var newSeller = seller;
					//centrisNotify.success("sellers.Messages.SaveSucceeded");
				}).error(function() {
					centrisNotify.error('sellers.Messages.SaveFailed');
			});
		});
	};


	$scope.isLoading = true;
	var gettingSellers = AppResource.getSellers();
	gettingSellers.success(function (sellerInfo) {
		$scope.sellerInfo = sellerInfo;
		$scope.isLoading = false;
	console.log($scope.sellerInfo);
	}).error(function(){
		$scope.isLoading = false;
		centrisNotify.error('sellers.Messages.LoadFailed');
	});

	$scope.enterSeller = function(sellerID) {
		$location.path("/seller/" + sellerID);	
	};


	$scope.onEditSeller = function onEditSeller(sellerInfo) {
		SellerDlg.show(sellerInfo).then(function(seller) {
			AppResource.updateSeller(sellerInfo.id, seller).success(function(seller){
					centrisNotify.success("sellers.Messages.SaveSucceeded");
			}).error(function() {
					centrisNotify.error("sellers.Messages.EditFailed");
			});
		});
	};
});