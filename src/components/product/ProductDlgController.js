"use strict";

angular.module("project3App").controller("ProductDlgController",
function ProductDlgController($scope, AppResource, $routeParams, $uibModal, modalParam, $location, $translate, $rootScope, centrisNotify, SellerDlg ) {

  $scope.onCancel = function onCancel() {
    $scope.$dismiss();
  };

  $scope.onOk = function onOk(productInfo) {
      console.log(productInfo);
      /*if(products.name.length === 0 || products.category.length === 0 || products.imagePath.length === 0) {
        centrisNotify.error("sellers.Messages.InputFail");
        return;
      }*/
      $scope.$close(productInfo);
      
  };

  var productObj = modalParam.product;
        if(productObj !== undefined) {
            $scope.product = {
                name: productObj.name,
                price: productObj.price,
                quantitySold: productObj.quantitySold,
                quantityInStock: productObj.quantityInStock,
                imagePath: productObj.imagePath
            };
        } else {
            $scope.product = {
                name: "",
                price: "",
                quantitySold: "0",
                quantityInStock: "0",
                imagePath: ""
            };
        }

});
