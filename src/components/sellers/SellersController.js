"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $routeParams, $uibModal, $location, $translate, $rootScope, centrisNotify, SellerDlg) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

	//Code help from https://angular-ui.github.io/bootstrap/

	$scope.addSellerModal = function() {
	  var modalInstance = $uibModal.open({
      templateUrl: 'src/components/sellers/modal.html',
      controller: 'ModalController',
    });

    modalInstance.result.then(function (seller) {
			console.log(seller);
			var sellerSet =
			{
			name: seller.sellerName,
			category: seller.sellerCategory,
			imagePath: seller.sellerimagePath
			};
		AppResource.addSeller(sellerSet).success(function (seller){
			var newSeller = seller;

		}).error(function () {
			centrisNotify.error("sellers.Messages.SaveFailed");
		});
    });
	};

	/*$scope.onAddSeller = function onAddSeller() {
			var sellerSet = {};
			SellerDlg.show(sellerSet).then(function(seller) {
				AppResource.addSeller(seller).success(function(sellerInfo) {
					centrisNotify.success('sellers.Messages.SaveSucceeded');
				}).error(function() {
					centrisNotify.error('sellers.Messages.SaveFailed');
			});
		});
	};
*/

	$scope.isLoading = true;
	var gettingSellers = AppResource.getSellers();
	gettingSellers.success(function (sellerInfo) {
	$scope.sellerInfo = sellerInfo;
	console.log($scope.sellerInfo);
	}).error(function(){
		$scope.isLoading = false;
		centrisNotify.error('sellers.Messages.LoadFailed');
	});

	$scope.enterSeller = function(sellerID) {
		$location.path("/seller/" + sellerID);	
	};

	$scope.editSeller = function(s) {
		SellerDlg.show(s).then(function(seller) {
			AppResource.updateSeller(s.id, seller).success(function (seller){
					centrisNotify.success('sellers.Messages.EditSucceeded');
			}).error(function() {
					centrisNotify.success('sellers.Messages.EditFailed');
			});
		});
	};

/*
		$scope.onEditSeller = function onEditSeller(s) {
		SellerDlg.show(s).then(function(seller) {
			AppResource.updateSeller(s.id, seller).success(function (seller){
					centrisNotify.success('sellers.Messages.EditSucceeded');
			}).error(function() {
					centrisNotify.success('sellers.Messages.EditFailed');
			});
		});
	};

	}*/
});