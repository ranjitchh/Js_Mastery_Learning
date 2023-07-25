// let name = "    hello ranjit !   ";

// console.log(name);
// console.log(name.length);
// let newString = name.trim();
// console.log(newString);

// Data types

// let number = 10;
// console.log(typeof number);
// number=String(number);
// console.log(typeof number);

// "use strict";

// let name = "Ranjit";
// let age = 22;

// // console.log("my name is" + name + " and age is " + age);
// console.log(`my name is ${name} and age is  ${age}`);  // using template string

// == vs ===
// let num1 = 10;
// let num2 = "10";

// console.log(num1 == num2);
// console.log(num1 == num2);
// console.log(num1 != num2);
// console.log(num1 !== num2);

// truthy and falsly

// false
// 0 (zero)
// -0 (minus zero)
// 0n (BigInt zero)
// '', "", `` (empty string)
// null
// undefined
// NaN

// Everything else is truthy.
// '0' (a string containing a single zero)
// 'false' (a string containing the text “false”)
// [] (an empty array)
// {} (an empty object)
// function(){} (an “empty” function)

// let drink;
// let age = 8;
// // ternary operator

// drink = age < 5 ? "milk" : "coffee";

// console.log(drink);

// let name='ranjit';
// let age = 8;

// if(name[0]=="r" && age>5){
//     console.log("yess");
// }

// arrays in js

// let num=[1,2,3,4,5];

// console.log(num);
// num.push(6);  // to add element at end of array
// console.log(num);

// num.pop();  // to remove from end of array
// console.log(num);

// num.pop();  // to remove from end of array
// console.log(num);

// num.shift()  // to remove an element from start
// console.log(num);

// num.unshift(10);  // to add an element from start
// console.log(num);

// console.log(num.length);

// console.log(typeof num);

// let num=[1,2,3,4,5];

// let ex=num.pop();

// console.log(num);
// console.log(ex);

// primitive and refrence type
// let num1=10;
// let num2=num1;

// num2=num2+10;
// console.log(num2);
// console.log(num1);

// // refrence type
// let name=['harish','sirish','thakur'];

// let name2=name.slice(0).concat(['ram','rahim']);

// console.log(name);
// console.log(name2);

// console.log(name===name2);

// for loop in array

// let arrays=['hey','ranjit','how','are','you! '];

// for(let i=0;i<array.length;i++){
//     console.log(array[i].toUpperCase());
// }
// let i=0;
// while(i<arrays.length){
//     console.log(arrays[i]);
//     i++;
// }

// for(let array of arrays){
//     console.log(array);
// }
// for(let index in arrays){
//     console.log(index);
// }

// let array=[1,2];

// let [num1,num2,num3]=array;

// console.log(num1);
// console.log(num2);
// console.log(num3);

// const num={
//     num1:10,
//     num2:20,
// }

// console.log(typeof num.num1);

// const key1='objkey1';
// const key2='objkey2';

// const value1='myvalue1';
// const value2='myvalue2';

// const person={

// }

// person[key1]=value1;
// person[key2]=value2;

// console.log(person);
"use strict";

// spread operator
// const obj = {
//   key1: "10",
//   key2: "10",
//   key3: "20",
// };
// const obj1 = {
//   key4: "10",
//   key5: "10",
//   key6: "20",
// };

// const obj3={...obj,...obj1};

// console.log(obj3);

// object destructing
// const obj = {
//   key1: "10",
//   key2: "10",
//   key3: "20",

// };

// // const {key1,key2,key3}=obj;

// console.log(key1);
// console.log(key2);
// console.log(key3);

// object inside Array

// const users = [
//   {
//     userId: 1,
//     name: "ranjit",
//     Age: 22,
//     gender: "male",
//   },
//   {
//     userId: 2,
//     name: "ravan",
//     Age: 24,
//     gender: "male",
//   },
//   {
//     userId: 3,
//     name: "ram",
//     Age: 23,
//     gender: "male",
//   },
// ];

// // destruction of object inside array

// const [user1,user2]=users;
// const [{name}, ,{userId} ]=users;

// console.log(user1);
// console.log(name,userId);
// // for(let user of users){
// //   console.log(user.userId);
// //   console.log(user.Age);
// // }

// function in js

// function add(a, b) {
//   return a+b;
// }

// const res=add(10,20);
// console.log(res);

// odd or even function

// function isEven(num){
//   if(num%2==0){
//     console.log( true);
//   }
//   else{
//     console.log(false);
//   }
// }

// isEven(5);
// isEven(4);

// function to take string and return first char

// function StringC(name){
//     return name[0];
// }

// const first=StringC("ranjit");
// console.log(first);

// function to take a array and find for the Element

// function findTarget(num,target){
//  for(let i =0;i<num.length;i++){
//     if(num[i]=== target){
//       return i;
//     }
//  }
//  return "not found";
// }
// let nums=[1,2,3,4,5];
// console.log(findTarget(nums,3));

// arrow function

// const add=(a,b)=>(a+b);

// console.log(add(1,3));

// Hoisting in js
// default behaviour of js that move declaration to the top of File

//  function inside function in js

// const nestedFun = () => {
//   const add = (a, b) => {
//     // arrow funnction
//     console.log(a + b);
//   };
//   function sub(a, b) {
//     // function declaration
//     console.log(a - b);
//   }
//   const div = function (a, b) {
//     // function expression
//     console.log(a / b);
//   };

//   console.log("nested function demo");
//   add(2, 3);
//   sub(5, 6);
//   div(5, 2);
// };

// nestedFun();

// function scope and block scope

// let and const are block scope
// eg
// {
//   let a = 10;
// }
// console.log(a);
// {
//   const b = 20;
// }
// console.log(b);
// this caught error
// console.log(a);
// ReferenceError: a is not defined

// var is function scope
// {
//   var a = 10;
// }
// console.log(a);

// {
//   var a = 12;
// }

// console.log(a);

// default params

// function add(a,b=3){
//   console.log(a+b);
// }

// add(3);

// // rest parameters in js

// function view(a,b,c,...rest){
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   const [num1,num2,num3]=rest;

//   console.log(num1);
//   console.log(num2);
//   console.log(num3);
// }

// view(1,2,3,4,5,6);

// Day 4th of js

// 1. call back function
// function func2(){
//   console.log("call back function ");
// }
// const func=(other)=>{
//  other();
// }
// func(func2);

//2. Important array method in js
// forEach(callback);
// Map

//forEach();
// let num=[10,20,34,54];
// const func=(num,index)=>{
//   console.log(`number is ${num} and index in ${index}`);
// }
// num.forEach(func);

// const users = [
//   { name: "ranjit", age: 21 },
//   { name: "ran", age: 25 },
//   { name: "jit", age: 23 },
// ];

// users.forEach(function (name) {
//   console.log(name.name);
// });

// Map Function
// it return new array

// let number=[1,3,4,5,57];

// function square(number){
//    return number*number;
// }

// let res=number.map(square);

// console.log(res);

// filter method in js

// const names = ["ranjit", "arjun", "rachit", "madhava"];

// const IsStartWithR = (name) => {
//   return name === "madhava";
// };

// const rname = names.filter(IsStartWithR);
// console.log(rname);

// const number = [1, "a", {}, 3, "g"];

// let res = number.filter((element) => {
//   return typeof element === "string";
// });

// console.log(res);

// Reduce method in js
// problem is to find the sum of all value from array
// let number=[1,2,3,4,5];

// let sumofaray=number.reduce((accumulator,currentVal)=>{
//   return accumulator+currentVal;
// })

// console.log(sumofaray);

// const cart=[
//   {
//     productId:1,
//     productName: "iphone",
//     Price:12000,
//   },
//   {
//     productId:2,
//     productName: "iphone",
//     Price:12000,
//   },
//   {
//     productId:3,
//     productName: "iphone",
//     Price:12000,
//   }
// ]

// console.log("The number of Item in Cart is");
// let res=cart.reduce((totalPrice,CurrentProduct)=>{
//    return totalPrice+=CurrentProduct.Price;
// },0)

// console.log(res);

//sorting an array using sort method()

// const Ascendnum = [2, 7, 3, 12, 7, 3];
// const Descendnum = [2, 7, 3, 12, 7, 3];

// Ascendnum.sort((a, b) => {
//   return a - b;
// });
// Descendnum.sort((a, b) => {
//   return b - a;
// });

// console.log(Ascendnum);
// console.log(Descendnum);

//product sorting in ecommerce

// const products = [
//   {
//     product: 1,
//     productPrice: 1200,
//   },
//   {
//     product: 1,
//     productPrice: 200,
//   },
//   {
//     product: 1,
//     productPrice: 1300,
//   },
// ];
// const productSorted = [...products];
// // task is to sort the product according to the price
// productSorted.sort((a, b) => {
//   return a.productPrice - b.productPrice;
// });
// console.log(products);
// console.log(productSorted);
