const child = require('./index');
console.log(`sum of 2 and 3 is ${child.add(2, 3)}`);
console.log(`substraction of 2 and 3 is ${child.substract(2, 3)}`);
console.log(`division of 2 from 3 is ${child.divide(2, 3)}`);
try {
    child.divide(2, 0);
} catch (error) {
    console.log(` ${error}`);

}
// console.log(`division of 2 from 0 is ${child.divide(2, 0)}`);
