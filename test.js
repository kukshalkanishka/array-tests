const lib= require("../library/library.js");
const assertEqual = require("assert").equal;
const assert = require("assert").deepEqual;

//reverse numbers of an array

const reverseNumbers = lib.reverseNumbers;
assert(reverseNumbers([3]),[3]);
assert(reverseNumbers([0]),[0]);
assert(reverseNumbers([2,4]),[4,2]);
assert(reverseNumbers([2,3.2]),[3.2,2]);
assert(reverseNumbers([3,35,666]),[666,35,3]);
assert(reverseNumbers([4,6,7,9,4,6]),[6,4,9,7,6,4]);

//selects every second number of an array

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

//generate fibonacci series

const generateFibonacci = lib.generateFibonacci;
assert(generateFibonacci(1),[0]);
assert(generateFibonacci(2),[0,1]);
assert(generateFibonacci(3),[0,1,1]);
assert(generateFibonacci(6),[0,1,1,2,3,5]);
assert(generateFibonacci(10),[0,1,1,2,3,5,8,13,21,34]);

//----------------(test provide number after comparison)---------

const reduce = lib.reduce;
assertEqual(reduce([1],Math.min),1);
assertEqual(reduce([1],Math.max),1);
assertEqual(reduce([1,2],Math.min),1);
assertEqual(reduce([1,2,4,5],Math.max),5);




//---------------(find greatest number)-------------------//

const findGreatestNum = lib.findGreatestNum;
assertEqual(findGreatestNum([2]),2);
assertEqual(findGreatestNum([2,2]),2);
assertEqual(findGreatestNum([2,3]),3);
assertEqual(findGreatestNum([2,4,8]),8);
assertEqual(findGreatestNum([2,10,1,555]),555);

//---------------(find lowest number)-------------------//

const findLowestNum = lib.findLowestNum;
assertEqual(findLowestNum([2]),2);
assertEqual(findLowestNum([2,2]),2);
assertEqual(findLowestNum([2,3]),2);
assertEqual(findLowestNum([2,4,8]),2);
assertEqual(findLowestNum([2,10,1,555]),1);

//-----------------(test for find average of numbers)------------//

const provideAverage = lib.provideAverage;
assertEqual(provideAverage([2]),2);
assertEqual(provideAverage([2,2]),2);
assertEqual(provideAverage([2,3]),2.5);
assertEqual(provideAverage([2,4,8]),4.7);


