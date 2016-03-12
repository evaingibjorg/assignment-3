"use strict";

angular.module("project3App").controller("ProductDlgController",
function ProductDlgController($scope, AppResource, $routeParams, $uibModal, modalParam, $location, $translate, $rootScope, centrisNotify, SellerDlg ) {

  $scope.onCancel = function onCancel() {
    $scope.$dismiss();
  };

  $scope.onOk = function onOk(productInfo) {
      console.log(productInfo);
      /*if(productInfo.name.length === 0 || productInfo.category.length === 0 || productInfo.imagePath.length === 0) {
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
                quantitySold: "",
                quantityInStock: "",
                imagePath: ""
            };
        }

});
