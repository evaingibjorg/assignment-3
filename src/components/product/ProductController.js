"use strict";
angular.module("project3App").controller("ProductController", 
function ProductController($scope, $routeParams, $uibModal, ProductDlg,	 centrisNotify, AppResource, store, tab) {
  $scope.editProduct = function(product) {
    ProductDlg.show(product).then(function() {
			AppResource.updateProduct(parseInt(product.id), product).success(function (product) {
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