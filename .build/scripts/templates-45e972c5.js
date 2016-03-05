angular.module("project3App").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\r\n<html ng-app=\"project3App\">\r\n<head>\r\n	<title>WEPO Assignment 3 - Online Web Store</title>\r\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n	<meta charset=\"utf-8\">\r\n	<link rel=\"stylesheet\" href=\"styles/vendor.css\">\r\n	<link rel=\"stylesheet\" href=\"styles/app.css\">\r\n	<link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\">\r\n	<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js\"></script>\r\n	<script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js\"></script>\r\n</head>\r\n\r\n	<main class=\"container-fluid\">\r\n		<div class=\"Main clearfix\" ng-view id=\"content\"></div>\r\n	</main>\r\n\r\n	<toaster-container></toaster-container>\r\n	<!-- inject:vendor:js -->\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:app:js -->\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:templates:js -->\r\n	<!-- endinject -->\r\n</body>\r\n\r\n</html>\r\n");
$templateCache.put("components/sellers/index.html","<div>\r\n	<div id=\"header\">\r\n  		<h1>Söluaðilar</h1>\r\n  	</div>\r\n  	<div id=\"section\">\r\n	   <div class=\"ModalButton\">\r\n	    	<!-- Trigger the modal with a button --> \r\n	    	<!-- Code from http://www.w3schools.com/bootstrap/bootstrap_modal.asp -->\r\n	    	<button type=\"button\" class=\"btn btn-default btn-lg\" ng-click=\"addSellerModal()\" data-toggle=\"modal\" data-target=\"#myModal\">Bæta við seljanda</button>\r\n		</div>\r\n\r\n	  <div>\r\n	      <h2>Nafn seljanda:</h2>\r\n	      <ul>\r\n	        <li ng-repeat=\"seller in sellerInfo\">\r\n	          <a href ng-click=\"moveToSeller(seller.name)\"> {{seller.name}} </a>\r\n	        </li>\r\n	      </ul>\r\n	    </div>\r\n	</div>\r\n\r\n </div>");
$templateCache.put("components/sellers/modal.html","<!-- Code origin from http://www.w3schools.com/bootstrap/bootstrap_modal.asp -->\n<div ng-controller\"SellersController\">\n\n       <!-- Modal content -->\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" ng-click=\"exitModal()\">&times;</button>\n          <h4 class=\"modal-title\">Modal Header</h4>\n        </div>\n        <div class=\"modal-body\">\n           <div>\n            <label>Name:</label>\n            <input type=\"text\" class=\"form-control\" ng-model=\"sellerInfo.sellerName\" ng-required=\"required\"  />\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-default\" type=\"submit\" ng-click=\"submitInfo(sellerInfo)\">Bæta við</button>\n        </div>\n</div>");
$templateCache.put("shared/notify/centris-notify-undo.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<!-- Note: basically the same template as the default template,\r\n	     but with an added \"Undo\" button. Note: we don\'t assume that\r\n	     there will be any need for custom HTML in the title/message,\r\n	     so that support has been removed. -->\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{title}}\r\n	</div>\r\n	<div>\r\n		<a class=\"centris-notify-undo pull-right\"\r\n			ng-click=\"centrisUndo(message.type, message.id)\"\r\n			translate=\"Undo\" />\r\n	</div>\r\n</div>");
$templateCache.put("shared/notify/centris-notify.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{message}}\r\n	</div>\r\n</div>");}]);