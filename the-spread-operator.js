/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 =  arr1;

// pushing a new element into the second array
arr2.push(4);

console.log("second array:", arr2);

//if run the first array will be an exact copy of the secnod array. becuase the second array is a new variable 
// apointing to the same object.. which is the first array

console.log("first array:", arr1);

//output second array: [ 1, 2, 3, 4 ]
//first array: [ 1, 2, 3, 4 ]

// Copying an array
// to copy array we use the 3 dots ... 

let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7);

console.log("Third array:", arr3);
console.log("Fourth array:", arr4);

// output
//Third array: [ 4, 5, 6 ]
//Fourth array: [ 4, 5, 6, 7 ]

// Copying an object

// Copying only part of an array/object
