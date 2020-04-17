// ----- Object Destructuring -----
/* 
const person = {
  name: 'Kusal',
  age: 38,
  location: {
    city: 'Melbourne',
    temp: 15
  }
}

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} degrees in ${city}.`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-published' } = book.publisher;

console.log(publisherName);
 */

// ----- Array Destructuring -----

const address = [ '53 Pickford Street', 'Burwood East', 'Victoria', '3151' ];

const [ street, city, state, postcode ] = address;

console.log(`I live in ${street} ${city} ${state} ${postcode}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ coffeeType, , medium ] = item;

console.log(`A Medium ${coffeeType} is ${medium}`);