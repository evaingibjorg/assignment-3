"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope, centrisNotify, modalParam) {

  $scope.onCancel = function onCancel() {
    $scope.$dismiss();
  };

  $scope.onOk = function onOk(sellerInfo) {
      console.log(sellerInfo);
      if(sellerInfo.name.length === 0 || sellerInfo.category.length === 0 || sellerInfo.imagePath.length === 0) {
        centrisNotify.error("");
        return;
      }
      $scope.$close(sellerInfo);
      
  };

  var modalObj = modalParam.seller;
        if(modalObj !== undefined) {
            $scope.seller = {
                name: modalObj.name,
                category: modalObj.category,
                imagePath: modalObj.imagePath
            };
        } else {
            $scope.seller = {
                name: "",
                category: "",
                imagePath: ""
            };
        }

});