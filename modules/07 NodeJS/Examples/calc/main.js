// const c = require('./calculator');
const { Calc: C, Logger } = require('./calculator');

const calc1 = new C(6,3);

console.log(calc1.sum());
console.log(calc1.sub());
console.log(calc1.multiply());
console.log(calc1.divide());

const calc2 = new C(12,4);

console.log(calc2.sum());
console.log(calc2.sub());
console.log(calc2.multiply());
console.log(calc2.divide());