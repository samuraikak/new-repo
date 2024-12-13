const number = 12;

if(number > 10) {
    console.log('Large Number');
}

if(number < 10) {
    console.log('Small Number');
    
}

console.log("Number Test");

// setInterval(()=> {
//     console.log('Hello World');
    
// }, 1000)


const lodash = require('lodash');

const array = [1, 2, [3, 4], 4, [6, 8], 5];

const newArray = lodash.flattenDeep(array);

console.log(newArray);