

// const speak = function(){
//     console.log('good day');
// };
// greet();
// greet();
// greet();
// speak();
// speak();

// function greet(){
//     console.log('hello there');
// }

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };
// speak();
// speak('shaun');
// speak('mario', 'morning');

// const calcArea = function(radius){
//     return 3.14 * radius ** 2;
// };

// const calcArea = (radius) => 3.14 * radius ** 2;

// const area = calcArea(5);
// console.log(area);

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10, 15, 30], .2));

// const names = 'shaun';

// const greet = () => 'hello ';

// let resultOne = greet();
// console.log(resultOne);

// let resultTwo = names.toUpperCase();
// console.log(resultTwo); 

// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// };
// myFunc(val => {
//     console.log(val);
// });

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);    
};

people.forEach(logPerson);