// const cars1 = {
//     Brand : 'Toyota',
//     Color : 'RED'
// }
// const cars2 = {
//     Brand : 'Nissan',
//     Color : 'RED',
//     Year : 2004
// }
// const cars3 = {...cars1,...cars2};
// console.log(cars3);

// const car = 'AUDI';
// const a = [...car];
// console.log(a);

const numbers = [3,5,7,8,9];
const [a,b,c,...others] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(others);