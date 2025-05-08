alert("lel");
console.log("1");
console.log("2");

// number stuff
let age = 25;
let year = 2019
console.log(age, year);
age = 30;
console.log(age);

const point = 100;
console.log(point);

var score = 75;
console.log(score);

// string stuff
console.log('hello, world');

let email = "vU9l6@example.com";
console.log(email);

let firstname ='Brandon';
let lastname = 'Sanderson';
let fullname = firstname + ' ' + lastname;
console.log(fullname);

console.log(fullname[2]);
console.log(fullname.length);   

console.log(fullname.toUpperCase());
let result = fullname.toLowerCase();
console.log(result, fullname);

let index = email.indexOf('@');
console.log(index);

//methods for strings
//let emailResult = email.lastIndexOf('l')

//let emailResult = email.slice(5,7);
//let emailResult = email.substr(5,7);
let emailResult = email.replace('e', 'd');
console.log(emailResult);

let radius = 10;
const pi = 3.14;

//console.log(10/2);
//let numberResult = radius % 3;
//let numberResult = pi * radius**2;
let numberResult = 5 * (10-3)**2;
console.log(numberResult);
 
//likes = likes + 1;
//likes--;
//likes += 10;
//likes *= 2;
//likes /= 2;
//console.log(likes);
//console.log(5*'hello');

//let likesResult = 'the blog has '+ likes + ' likes';
//console.log(likesResult);

const title = 'best reads of 2019';
const author = 'mario';
const likes = 30;
const blog = `the blog called ${title} by ${author} has ${likes} likes`;
console.log(blog);

let html = `
    <div>
        <h2>${title}</h2>
        <p>by ${author}</p>
        <span>This blog has ${likes} likes</span>
    </div>
`;
console.log(html);


let ninjas = ['shaun', 'ryu', 'chun-li'];
//ninjas[1] = 'ken';
//console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

//let random = ['shaun', 'crystal', 30, 20];
//console.log(random);

//console.log(ninjas.length);
//let resultNinja = ninjas.join('-');
//let resultNinja = ninjas.indexOf('chun-li');
//let resultNinja = ninjas.concat(['ken', 'crystal']);
let resultNinja = ninjas.push('ken');
resultNinja = ninjas.pop();
console.log(ninjas);

let age2 = null;
console.log(age2, age2 + 3);

let emailBool = email.includes('@');
console.log(emailBool); 

let names = ['mario', 'luigi', 'toad'];
let resultName = names.includes('luigi');
console.log(resultName);

let num = 23
console.log(num == 23);   
console.log(num == 50);
console.log(num != 50);
console.log(num > 50);
console.log(num < 50);
console.log(num >= 25);
console.log(num <= 25);

let stringName = 'shaun' 
console.log(stringName == 'shaun');
console.log(stringName == 'Shaun');
console.log(stringName > 'crystal');
console.log(stringName > 'Shaun');

console.log(num === 23);
console.log(num === '23');
console.log(num !== 23);
console.log(num !== '23');

let score = '100';
// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

//let convResult = Number('hello');
// let convResult = String(50);
// let convResult = Boolean(0);
let convResult = Boolean('');
console.log(convResult, typeof convResult);
