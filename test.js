const lib= require("../library/library.js");
const generateFibonacci = lib.generateFibonacci;
const assertEqual = require("assert").equal;
const assert = require("assert").deepEqual;

const reverseNumbers = lib.reverseNumbers;

assert(reverseNumbers([3]),[3]);
assert(reverseNumbers([0]),[0]);
assert(reverseNumbers([2,4]),[4,2]);
assert(reverseNumbers([2,3.2]),[3.2,2]);
assert(reverseNumbers([3,35,666]),[666,35,3]);
assert(reverseNumbers([4,6,7,9,4,6]),[6,4,9,7,6,4]);


const selectEverySecondNum = lib.selectEverySecondNum;

assert(selectEverySecondNum([3]),[3]);
assert(selectEverySecondNum([0]),[0]);
assert(selectEverySecondNum([2,4]),[2]);
assert(selectEverySecondNum([2,3.2]),[2]);
assert(selectEverySecondNum([3,35,666]),[3,666]);
assert(selectEverySecondNum([4,6,7,9,4,6]),[4,7,4]);

const selectOddNumbers = lib.selectOddNumbers;

assert(selectOddNumbers([3]),[3]);
assert(selectOddNumbers([3,5]),[3,5]);
assert(selectOddNumbers([2,4]),[]);
assert(selectOddNumbers([2,3]),[3]);
assert(selectOddNumbers([2,5,8,]),[5]);
assert(selectOddNumbers([4,6,7,9,4,6]),[7,9]);


const addNumbers = lib.addNumbers;

assertEqual(addNumbers([3]),3);
assertEqual(addNumbers([0]),0);
assertEqual(addNumbers([2,4]),6);
assertEqual(addNumbers([2,3.2]),5.2);
assertEqual(addNumbers([3,35,666]),704);
assertEqual(addNumbers([4,6,7,9,4,6]),36);

//assert(generateFibonacci(1),[0]);
assert(generateFibonacci(2),[0,1]);
assert(generateFibonacci(3),[0,1,1]);
assert(generateFibonacci(6),[0,1,1,2,3,5]);
assert(generateFibonacci(10),[0,1,1,2,3,5,8,13,21,34]);


