console.log('------- test file loaded -------');

const sample = [1, 23, 43,-11, 12, 54, 76, 98, 32];

console.time();
const result= getSmallestNumber(sample);
console.log(result);

console.timeEnd();
