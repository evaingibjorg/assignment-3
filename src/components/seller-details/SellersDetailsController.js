"use strict";
angular.module("project3App").controller("SellersDetailsController",
function SellersController($scope, AppResource, $routeParams, $uibModal, $location, $translate, $controller) {
	
	
 $scope.sellerID = $routeParams.sellerID ;
 console.log($scope.sellerID);

  AppResource.getSellerDetails(parseInt($scope.sellerID)).success(function(sellers) {
    $scope.seller = sellers;
    console.log(sellers);
  });
});