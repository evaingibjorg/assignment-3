"use strict";

angular.module("project3App").controller("ProductDlgController",
function ProductDlgController($scope, centrisNotify, modalParam) {

  $scope.onCancel = function onCancel() {
    $scope.$dismiss();
  };

  $scope.onOk = function onOk(productInfo) {
      console.log(productInfo);
      if(productInfo.name.length === 0 || productInfo.category.length === 0 || productInfo.imagePath.length === 0) {
        centrisNotify.error("sellers.Messages.InputFail");
        return;
      }
      $scope.$close(productInfo);
      
  };

  var modalObj = modalParam.product;
        if(modalObj !== undefined) {
            $scope.product = {
                name: modalObj.name,
                price: modalObj.price,
                imagePath: modalObj.imagePath
            };
        } else {
            $scope.product = {
                name: "",
                price: "",
                imagePath: ""
            };
        }

});