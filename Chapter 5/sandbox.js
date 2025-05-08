let user = {
    name: 'crystal',
    age: 30,
    email: 'some@mail.com',
    location: 'Berlin',
    blogs:['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);
console.log(user['email']);
user['name' ] = 'chun-li';
console.log(user['name']);

console.log(typeof user);