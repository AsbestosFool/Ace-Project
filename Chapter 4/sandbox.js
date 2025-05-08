

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

const speak = function(name = 'luigi', time = 'night'){
    console.log(`good ${time} ${name}`);
};
speak();
speak('shaun');
speak('mario', 'morning');

