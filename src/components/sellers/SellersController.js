"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $location, $uibModal) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

	//Code help from http://mag5323.logdown.com/posts/245841-angularjs-modal-result-then

	$scope.addSellerModal = function() {
	  var modalInstance = $uibModal.open({
	  controller: 'ModalController',
      templateUrl: 'src/components/sellers/modal.html',
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

		}, function () {
			console.log('dismissed');
		}
	);
    });
	};

	var gettingSellers = AppResource.getSellers();
	gettingSellers.success(function (sellerInfo) {
	$scope.sellerInfo = sellerInfo;
	console.log($scope.sellerInfo);

	});
});