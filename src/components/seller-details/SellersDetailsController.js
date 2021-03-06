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

$scope.editProduct = function editProduct(productInfo) {
	console.log(productInfo);
    ProductDlg.show(productInfo).then(function(product) {
			AppResource.updateProduct(parseInt(productInfo.id), product).success(function(product) {
					//centrisNotify.success('product.Messages.EditSucceeded');
			}).error(function() {
					//centrisNotify.success('product.Messages.EditFailed');
			});
		});
	};

 $scope.sellerID = $routeParams.sellerID;
 console.log($scope.sellerID);
  AppResource.getSellerDetails(parseInt($scope.sellerID)).success(function(sellers) {
    $scope.seller = sellers;
    console.log(sellers);
  });

 var topTenProductSold = [];
 AppResource.getSellerProducts(parseInt($scope.sellerID)).success(function(products) {
    $scope.products = products;
    topTenProductSold = products;
    console.log(products);
  });

topTenProductSold = _.sortBy(topTenProductSold, "quantitySold");
$scope.topProducts = topTenProductSold.slice(0, 9);

  $scope.back = function back(){
		$location.path("/");
	};

});