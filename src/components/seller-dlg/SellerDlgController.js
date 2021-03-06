"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope, centrisNotify, modalParam) {

  $scope.onCancel = function onCancel() {
    $scope.$dismiss();
  };

  $scope.onOk = function onOk(sellerInfo) {
      console.log(sellerInfo);
      if(sellerInfo.name.length === 0 || sellerInfo.category.length === 0 || sellerInfo.imagePath.length === 0) {
        centrisNotify.error("sellers.Messages.InputFail");
        return;
      }
      $scope.$close(sellerInfo);
      
  };

  var sellerObj = modalParam.seller;
        if(sellerObj !== undefined) {
            $scope.seller = {
                name: sellerObj.name,
                category: sellerObj.category,
                imagePath: sellerObj.imagePath
            };
        } else {
            $scope.seller = {
                name: "",
                category: "",
                imagePath: ""
            };
        }

});