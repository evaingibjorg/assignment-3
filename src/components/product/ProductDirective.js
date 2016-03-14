"use strict";

angular.module("project3App").directive("tab", 
function tab() {
  return {
    restrict: "E",
    transclude: true,
    templateUrl: "src/components/seller-details/seller.html",
    controller: "ProductController"
  };
});
