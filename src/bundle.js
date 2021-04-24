/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _module = __webpack_require__(/*! ./module.js */ \"./src/module.js\");\n\n// console.log(add(45,64));\n\nconsole.log(stdArr);\n\n// var  a = 3;\n// function my() {\n//   var  a = 55;\n// }\n//\n//   console.log(a);\n//\n// console.log(a);\n\n// const arr = ['faisal','mezbah','jishan','riad']\n//\n// const [faisal,,...arg] = arr\n//\n// console.log(faisal,riad);\n\n\n// const obj = {name: 'mezbah', shift: 'day', roll: '62',phone: '019833883844',}\n//\n// const { name, roll, phone, ...rest } = obj\n// // console.log(rest);\n//\n// const obj2 = {name, roll, phone}\n\n\n// const arr = [1,2,3,4]\n// const entries = arr.entries() //show indexNum with data\n//\n// console.log(entries.next().value);\n// console.log(entries.next().value);\n// console.log(entries.next().value);\n\n\n//\n// arr.push('5') // add data in the last\n// arr.pop() // delete last data\n// arr.unshift(0) // add data in front of array\n// arr.shift() // delete first element\n// console.log(arr);\n\n\n//\n// arr.every() // all element must be true\n// arr.some() // minimum one ele should be true\n\n// const mulArr = [0,1,[2,3],[4,5,6]]\n// console.log(mulArr.entries(1));\n\n// Array JOIN\n\nvar arr = ['My', 'name', 'faisal'];\n// console.log(arr.join('/ ')); //join arry data\n\n\n// Array inclues method\n// console.log(arr.includes('nme')); // search element in the array\n\n// const red1 = arr.reduce((state,item) => {\n//   console.log(item);\n// },'')\n\n\n// Reduce right => access value from end\n// const red2 = arr.reduceRight((state,item) => {\n//   console.log(item);\n// },'')\n\n// const arr1 = [0, 1, 2, [3, 4]];\n//\n// console.log(arr1.flat());\n// // expected output: [0, 1, 2, 3, 4]\n//\n// const arr2 = [0, 1, 2, [[[3, 4]]]];\n//\n// console.log(arr2.flat(2));\n// // expected output: [0, 1, 2, [3, 4]]\n\n\n// arr.splice(1,2,'faisal') //add remove data,replace data,add new data by indexNum...(indexNUmWhereToStart,amountHowMuchRemoveOrIfAddTHenIndex0,giveDataWhichReplaceOrAdd)\n\n\n// var newArr = arr.slice(1,2); //return a new arry by indexNum (whereToStart, whereToEnd)\n// console.log(newArr);\n\n\n// console.log(arr);\n\n\n// var num = [1,4,6,7,8,9,4,57,34]\n// console.log(num.toString()); //convert this arry data to  string\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/module.js":
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconsole.log('lecture-seven=== module: ');\n\n// By using module system in es6, we can write our code indivisual indivisual file and then we can export all our code in one file..for this====\n\n\n// we need to use export key word in this file what we need to access other file  & then  we import the file where we need to access...\n\n// import * as (file-name) from 'location'  //for all file\n\n// import {what exacly we need} from 'location' //by destructuring system\n\nvar stdArr = [];\nvar student = exports.student = function student(id, name, roll, dept, institute) {\n  undefined.id = id;\n  undefined.name = name;\n  undefined.roll = roll;\n  undefined.dept = dept;\n  undefined.institute = institute;\n  stdArr.push(undefined);\n};\n\nvar std1 = student(1, 'mezbah', 333, 'tct', 'fci');\nvar std2 = student(2, 'faisal', 444, 'tct', 'fci');\nvar std3 = student(3, 'imam', 222, 'tct', 'fci');\n\n// export const add = (a,b)=> a+b;\n\n//# sourceURL=webpack:///./src/module.js?");

/***/ })

/******/ });