"use strict";

describe("SellersController unit tests", function() {
	var scope;
	var $sellersCtrl;
   	var resource;
    beforeEach(module("project3App"));	
		var mockModal = {
			mockSeller: {},
			isSuccess: true,
			open: function() {
				return { result: {
					then: function(cb) {
						if(mockModal.isSuccess) {
							cb(mockModal.mockSeller);
						}
					}
				}};
			}
	};

    beforeEach(inject(function($controller, $rootScope){
	   		scope = $rootScope.$new();
	   		$sellersCtrl = $controller("SellersController",{
	   		$scope:scope,
	   });
   }));
/*
angular.module('app', [])
.controller('PasswordController', function PasswordController($scope) {
  $scope.password = '';
  $scope.grade = function() {
    var size = $scope.password.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };
});
*/

	it("should work to add seller", function() {
		var newSeller = {
			SellerName: 'Eva',
			SellerCategory: 'Fatnaður',
			SellerimagePath: 'http://gloimg.sammydress.com/S/2015/201509/source-img/1442525830059-P-3136085.jpeg'
		};

		mockModal.mockSeller = newSeller;
		scope.addSellerModal();
		expect(resource.addSeller).toBe(true);
	});
});