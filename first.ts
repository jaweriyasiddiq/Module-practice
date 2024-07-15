//When we have to arrange our code in different file and wants to use same code in different file
//Then we use export and import method which is also called modules
// EXPORTING VERIABLE
//STRING
export let friend: string = "mutaiba";
console.log(friend);
//NUMBER
export let contactNumber: number = 123456789;
console.log(contactNumber);
//EXPORTING FUNCTION
//1st
export function addition(a: number, b: number) {
  console.log("a+b=", a + b);
}
addition(2, 5);
//2nd
export const multipilcation = (a, b) => {
  return a * b;
};
console.log(multipilcation(3, 5));
//3rd
//DEFAULT EXPORT
//1-Default export this module will be export this function or veriable by default
//2-We only export one thing by default we cant export multiple thing by using default
export default function subtraction(a, b) {
  console.log("a-b=", a - b);
}
subtraction(7, 3);
//EXPORTING OBJECT
//1st
export let myinfo = {
  name: "jaweriya",
  gender: "female",
  isStudent: true,
};
console.log(myinfo.isStudent);
//2nd
//Type Aliased
type Employes = {
  name: string;
  qualification?: string;
  age: number;
  experience: string;
};
export let Employes1: Employes = {
  name: "jaweriya",
  age: 18,
  experience: "two-years",
};
//EXPORTING ARRAY
//NUMBERS
export let arrayOfNum: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(arrayOfNum[6]);
//STRING
export let arrayOfString: string[] = [
  "apple",
  "mango",
  "banana",
  "pineapple",
  "grapes",
];
console.log(arrayOfString.indexOf("banana"));
