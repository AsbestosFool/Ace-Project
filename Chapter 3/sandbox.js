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

