const data = require("./data.json");

const result = [];
//To iterate an Array and check if the array is made up of objects and call iterateObject
function iterateArray(array) {
  for (let arrayEl of array) {
    if (typeof arrayEl == "object") {
      iterateObject(arrayEl);
    }
    //Adding condition to match any numbers
    /* else if (typeof arrayEl === "number") {
      result.push(arrayEl);
    }*/
  }
}

// To iterate throughout an Object based on key value pairs
function iterateObject(obj) {
  for (let key in obj) {
    //if the selected value is an array
    if (Array.isArray(obj[key])) {
      iterateArray(obj[key]);
    } // if the selected value is another object
    else if (typeof obj[key] == "object") {
      iterateObject(obj[key]);
    } // if the selected key is "value" then the value of this key is result
    else if (key === "value") {
      result.push(obj[key]);
    }
  }
}

iterateArray(data);
console.log(result);

/*
Answer - 
[
  'fruit',
  'orange',
  'banana',
  'pomegranate',
  'pineapple',
  'apple',
  'berry',
  'custard apple'
]

*/
