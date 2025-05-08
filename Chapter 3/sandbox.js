for(let i = 0; i < 5; i++){
    console.log('in loop:', i);
}

console.log('loop finished');

const names = ['shaun', 'mario', 'luigi'];
for(let i = 0; i < names.length; i++){
   // console.log(names[i]);
   let html = `<div>${names[i]}</div>`;
   console.log(html);
}

// let i = 0;
// while(i < 5){
//     console.log('in loop:', i);
//     i++;
// }

// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

let i = 3;
do{
    console.log('value of i is:', i);
    i++;
} while(i < 5);

const age = 25;
if(age > 20){
    console.log('you are over 20');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
if(ninjas.length > 3){
    console.log("that's is a lot of ninjas");
}

const password = 'p@ss12';

if(password.length >= 8 && password.includes('@'))
{
    console.log('that password is strong');
} 
else if(password.length >= 6 || password.includes('@') && password.length >= 5){
    console.log('that password is medium strong');
}
else {
    console.log('that password is not strong enough');
}

let user = false;

if(!user){
    console.log('you must be logged in to continue');
}

const  scores = [50, 25, 0, 30, 100];
for(let i = 0; i < scores.length; i++){
    if(scores[i] === 0){
        continue;
    }
    console.log('your score:', scores[i]);
    if(scores[i] === 100){
        console.log('congratulations');
        break;
    }
}

const grade = 'D';
switch(grade){
    case 'A':
        console.log('you got an A');
        break;
    case 'B':
        console.log('you got a B');
        break;
    case 'C':
        console.log('you got a C');
        break;
    case 'D':
        console.log('you got a D');
        break;
    default:
        console.log('not a valid grade');
}

let newage = 30;

if(true){
    let newage = 40;
    let name = 'shaun';
    console.log('inside 1st code block: ', newage, name);
    if (true){
        let newage = 50;
        console.log('inside 2nd code block: ', newage);
    }
}
console.log('outside code block: ', newage, name);