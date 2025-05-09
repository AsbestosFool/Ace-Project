// const blogs = [
//     {title: 'why mac & cheese rules', likes: 30},
//     {title: '10 things to make with marmite', likes: 50}
// ];

//console.log(blogs);

let user = {
    name: 'crystal',
    age: 30,
    email: 'some@mail.com',
    location: 'Berlin',
    blogs:[
        {title: 'why mac & cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes: 50}
    ],
    login: function(){
        console.log('the user logged in');  
    },   
    logout: function(){
        console.log('the user logged out');  
    },
    logBlogs: function(){
        console.log('this user has written the following blogs');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

user.logBlogs();
console.log(this);

// console.log(user);
// console.log(user.name);

// user.age = 35;
// console.log(user.age);
// console.log(user['email']);
// user['name' ] = 'chun-li';
// console.log(user['name']);

// console.log(typeof user);