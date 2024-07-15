"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employes1 = exports.myinfo = exports.multipilcation = exports.addition = exports.contactNumber = exports.friend = void 0;
//When we have to arrange our code in different file and wants to use same code in different file
//Then we use export and import method which is also called modules
// EXPORTING VERIABLE
//STRING
exports.friend = "mutaiba";
console.log(exports.friend);
//NUMBER
exports.contactNumber = 123456789;
console.log(exports.contactNumber);
//EXPORTING FUNCTION
//1st
function addition(a, b) {
    console.log("a+b=", a + b);
}
exports.addition = addition;
addition(2, 5);
//2nd
var multipilcation = function (a, b) {
    return a * b;
};
exports.multipilcation = multipilcation;
console.log((0, exports.multipilcation)(3, 5));
//3rd
//DEFAULT EXPORT
//1-Default export this module will be export this function or veriable by default
//2-We only export one thing by default we cant export multiple thing by using default
function subtraction(a, b) {
    console.log("a-b=", a - b);
}
exports.default = subtraction;
subtraction(7, 3);
//EXPORTING OBJECT 
//1st
exports.myinfo = {
    name: "jaweriya",
    gender: "female",
    isStudent: true
};
console.log(exports.myinfo.isStudent);
exports.Employes1 = {
    name: "jaweriya",
    age: 18,
    experience: "two-years"
};
//EXPORTING ARRAY
//NUMBERS
var arrayOfNum = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(arrayOfNum[6]);
//STRING
var arrayOfString = ["apple", "mango", "banana", "pineapple", "grapes"];
console.log(arrayOfString.indexOf("banana"));
