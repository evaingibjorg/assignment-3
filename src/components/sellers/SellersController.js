"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $routeParams, $uibModal, $location, $translate) {
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
			//centrisNotify.error("");
		});
    });
	};

	var gettingSellers = AppResource.getSellers();
	gettingSellers.success(function (sellerInfo) {
	$scope.sellerInfo = sellerInfo;
	console.log($scope.sellerInfo);

	}); 

	$scope.enterSeller = function(sellerID) {
		$location.path("/seller/" + sellerID);		
	};

	$scope.translateText = function(key) {
		$translate.use(key);
	};
});