// const player = {
//     name: 'James Bond',
//     codeName: 007,
//     age: 32,
//     address: {
//         city: 'London'
//     }
// };

// const {name, codeName, age, address: { city }} = player;

// console.log(name, codeName, age, city);

// function addressMaker({city, street} = address) {
//     const newAddress = { city, street, country: 'Philippines'};

//     console.log(newAddress)
//     console.log(`${city}, ${street}, ${newAddress.country}`)
// }


// addressMaker({city: 'Quezon', street: 'Ortigas Avenue'});

// const students = [
//     { name: 'Manny', city: 'Manila'},
//     { name: 'Jose', city: 'Intramuros'},
//     { name: 'Ana', city: 'Mandaluyong'}
// ]

// for ( const student of students) {
//     const { name, city} = student
//     console.log(`${name} lives in ${city}`)
// }

// const buyFood = (food = 'something') => {
//     console.log(`I'm going to buy ${food} from the sari sari store`);
// }

// buyFood();


// class Player {
//     constructor (name, country) {
//         this.name =  name;
//         this.country = country
//     }

//     get metaData(){
//         return `${this.name} was born in ${this.country}`;
//     }
// }

// let soccer = new Player('Messia', 'Argentina');
// console.log(soccer.metaData);

// class BasketBallPlayer extends Player {
//     constructor(name, age) {
//         super(name,);
//         this.age = age;
//     }

//     get metaData(){
//         return `${this.name} is ${this.age} years old and knows how to play basketball`;
//     }
// }

// let basketball = new BasketBallPlayer ('Lebron' , 34);
// console.log(basketball.metaData);

// const existing = [
//     {
//         firstName: `francis`,
//         age: 26,
//         email: `francis@gmail.com`
//     }
// ]

// const findUserData = (firstName) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             const userData = existing.find(({ firstName }) => firstName === firstName);

//             if(userData){
//                 reject(`User data not found`);
//             } else {
//                 resolve(`User Found`);
//             }
//         }, 3000);
//     })
// }

// findUserData('francis');

import cons
fetch('https://jsonplaceholder.typicode.com/comments/1');

