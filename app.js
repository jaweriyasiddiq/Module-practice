"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Here we import code which we wrote in first.ts file
//IMPORTING VERIABLE
//STING
var first_1 = require("./first");
console.log(first_1.friend);
//NUMBER
var first_2 = require("./first");
console.log(first_2.contactNumber);
//IMPORTING FUNCTION
//1st
var first_3 = require("./first");
(0, first_3.addition)(7, 9);
//2nd
//RENAMING
//For supposse we wants to rename our code in this file we use "as"
var first_4 = require("./first");
console.log((0, first_4.multipilcation)(7, 8));
//IMPORTING DEFAULT
//1- If want to import default export from another file we dont use curly braces
var first_5 = require("./first");
(0, first_5.default)(8, 9);
//2-in default export we also rename function without using as
var first_6 = require("./first");
(0, first_6.default)(10, 4);
//IMPORTING OBJECT
//We also can import multiple thing in time with help of comma(,)
var first_7 = require("./first");
console.log(first_7.myinfo.isStudent);
console.log(first_7.Employes1);
