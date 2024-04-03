// primitive vs reference data types

// let num1=6;
// let num2=num1;
// console.log("value of num1 is", num1);
// console.log("value of num2 is", num2);
// num1++;
// console.log("after incrementing");
// console.log("value of num1 is", num1);
// console.log("value of num2 is", num2);

// reference types

// let array1=["item1","item2"];
// let array2=array1;
// console.log("array1", array1);
// console.log("array2", array2);
// array1.push("item3");
// console.log("after pushing item3 to array1");
// console.log("array1", array1);
// console.log("array2", array2);

// how to clone and concatenate arrays

// let array1=["1","2","3","4","5"];
// let array2=array1.slice(0);      //1st way
// let array2=[].concat(array1);    //2nd way
// let array2=[...array1];          //3rd way [spread operator]

// create an array having all the elements of array1 and some different elements at the same time
// let array2=array1.slice(0).concat(["4","5"]);   //*1way
// let array2=[].concat(array1,["4","5"]);         //*2nd way
// let array2=[...array1,"4","5"];                 //*3way
// array1.push("3");
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);



// for loop in array

// let fruits=["kiwi","apple","banana","mango"];
// for(let i=0;i<=9;i++){
//     console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[fruits.length-1]);
// for(let i=0;i<fruits.length;i++){
// console.log(fruits[i]);
// console.log(fruits[i].toUpperCase());
// }

// let fruits2=[];
// for(let i=0;i<fruits.length;i++){
//     fruits2.push(fruits[i].toUpperCase());
// }
// console.log(fruits2);


// use const for creating Array

// const fruits=["mango","banana","kiwi"];
// fruits.push("apple");
// console.log(fruits);


                // ***ARRAY DESTRUCTURING*** //

const myArray=["7","9"];
// let myVar1=myArray[0];
// let myVar2=myArray[1];
// console.log("Value of myVar1 is", myVar1);
// console.log("Value of myVar2 is", myVar2);

let[myVar1,myVar2]=myArray;     //Array destructuring
console.log("Value of myVar1 is", myVar1);
console.log("Value of myVar2 is", myVar2);