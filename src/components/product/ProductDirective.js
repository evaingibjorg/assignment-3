"use strict";

angular.module("project3App").directive("tab", 
function tab() {
  return {
    restrict: "E",
    transclude: true,
    templateUrl: "src/components/product/product.html",
    controller: "ProductController"
  };
});
