"use strict";
angular.module("project3App").controller("ProductController", 
function ProductController($scope, $routeParams, $uibModal, ProductDlg,	 centrisNotify, AppResource, store, tab) {
  $scope.editProduct = function(s) {
    ProductDlg.show(s).then(function() {
			AppResource.updateProduct(parseInt(s.id), s).success(function (s) {
					centrisNotify.success('products.Messages.EditSucceeded');
			}).error(function() {
					centrisNotify.success('products.Messages.EditFailed');
			});
		});
	};

	$scope.sellerID = $routeParams.sellerID;
	AppResource.getSellerProducts(parseInt($scope.sellerID)).success(function(products) {
    $scope.products = products;
    console.log(products);
  });

});