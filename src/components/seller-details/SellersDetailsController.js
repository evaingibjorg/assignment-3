"use strict";
angular.module("project3App").controller("SellersDetailsController",
function SellersController($scope, AppResource, $routeParams, $uibModal, $location, $translate, $controller, ProductDlg, centrisNotify) {

$scope.onAddProduct = function onAddProduct() {

	ProductDlg.show().then(function(product) {
		AppResource.addSellerProduct(parseInt($scope.sellerID), product).success(function(productInfo) {
			var newProduct = product;
			 $scope.products.push(newProduct);
		}).error(function() {
			centrisNotify.error('sellers.Messages.SaveFailed');
		});
	});
};	


 $scope.sellerID = $routeParams.sellerID ;
 console.log($scope.sellerID);
  AppResource.getSellerDetails(parseInt($scope.sellerID)).success(function(sellers) {
    $scope.seller = sellers;
    console.log(sellers);
  });

  AppResource.getSellerProducts(parseInt($scope.sellerID)).success(function(products) {
    $scope.products = products;
    console.log(products);
  });

  $scope.back = function back(){
		$location.path("/");
	};

});