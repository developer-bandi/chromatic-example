const a = () => true;
const b = () => false;

console.log(Object.is(a, b), typeof b);
