// const para = document.querySelector('body > h1');
// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('error');
// console.log(errors);

// const title = document.getElementById('page-title');
// console.log(title); 

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// const paras = document.getElementsByTagName('p');
// console.log(paras);

// const para = document.querySelector('p');
// // para.innerText = 'ninjas are awesome';

// const paras = document.querySelectorAll('p');
// // paras.forEach(para => {
// //     console.log(para.innerText);
// //     para.innerText += ' new text';
    
// // });

// const content = document.querySelector('.content');
// //content.innerHTML += '<h2>hello</h2>';

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://youtube.com');
// link.innerText = 'youtube';

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green');

// const title = document.querySelector('h1');
// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.margin = '';

// const content = document.querySelector('p');
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    if(para.textContent.includes('error')) {
        para.classList.add('error');
    }
    else if(para.textContent.includes('success')) {
        para.classList.add('success');
    }
});

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');
