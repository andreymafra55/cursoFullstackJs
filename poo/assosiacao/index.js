const Address = require("./Address");
const Person = require("./Person");

const addr = new Address('Rua A',123,'bairro b','Recife','PE')
const eu = new Person('Andrey',addr)

console.log(eu)
console.log(eu.address.fullAddress())