/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	function checkout() {
	    var methodData = [
	      {supportedMethods: ["visa", "bitcoin"]}
	    ];
	    var details = {
	        displayItems: [
	            {
	                label: "メロンパン",
	                amount: {currency: "JPY", value : "100"}
	            },
	            {
	                label: "消費税",
	                amount: {currency: "JPY", value : "8"}
	            }
	        ],
	        total:  {
	            label: "合計",
	            amount: {currency: "JPY", value : "108"}
	        }
	    };
	    var options = {
	        requestPayerEmail: true,
	        requestPayerPhone: true,
	        requestShipping: true
	    };

	    var payment = new PaymentRequest(methodData, details, options);

	    payment.addEventListener("shippingaddresschange", function(e) {});
	    payment.addEventListener("shippingoptionchange", function(e) {});

	    payment.show().then(function(paymentResponse) {
	        var json = JSON.stringify({
	            method: paymentResponse.methodName,
	            details: paymentResponse.details
	        }, null, 2);

	        document.querySelector("#result").innerText = json;

	        paymentResponse.complete("fail");
	    });
	}

	document.querySelector("#purchase").addEventListener("click", checkout);


/***/ }
/******/ ]);