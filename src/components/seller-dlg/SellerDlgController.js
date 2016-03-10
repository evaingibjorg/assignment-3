"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope, seller) {
  
  $scope.seller = seller;


  $scope.onOk = function onOK(seller) {
    if(seller.SellerName !== undefined && seller.SellerCategory !== undefined && seller.SellerimagePath !== undefined) {
      //$scope.seller = seller;
      console.log("SellerDlgController" , $scope.seller);
      $scope.$close($scope.seller);
    }
    else {
      $scope.validationMessage = "You need to fill out all of the input fields";
    }
  };

  $scope.onCancel = function onCancel() {
    $scope.$dismiss();
  };
});