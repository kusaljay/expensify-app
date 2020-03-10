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