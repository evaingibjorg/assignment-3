"use strict";

angular.module("project3App").controller("ModalController",
function ModalController($scope, $uibModalInstance) {

	 $scope.exitModal = function () {
    $uibModalInstance.dismiss();
  };

	$scope.submitInfo = function (object) {
    $uibModalInstance.close(object);
  };

 

});