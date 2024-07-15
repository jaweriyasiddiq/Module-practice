//Here we import code which we wrote in first.ts file
//IMPORTING VERIABLE
//STING
import { friend } from "./first";
console.log(friend);
//NUMBER
import { contactNumber } from "./first";
console.log(contactNumber);
//IMPORTING FUNCTION
//1st
import { addition } from "./first";
addition(7, 9);
//2nd
//RENAMING
//For supposse we wants to rename our code in this file we use "as"
import { multipilcation as mul } from "./first";
console.log(mul(7, 8));
//IMPORTING DEFAULT
//1- If want to import default export from another file we dont use curly braces
import subtraction from "./first";
subtraction(8, 9);
//2-in default export we also rename function without using as
import sub from "./first";
sub(10, 4);
//IMPORTING OBJECT
//We also can import multiple thing in time with help of comma(,)
import { myinfo, Employes1 } from "./first";
console.log(myinfo.isStudent);
console.log(Employes1);
//IMPORTING ARRAY
//NUMBERS
import { arrayOfNum } from "./first";
console.log(arrayOfNum[2]);
//STRING
import { arrayOfString } from "./first";
console.log(arrayOfString.push("cherry"));
