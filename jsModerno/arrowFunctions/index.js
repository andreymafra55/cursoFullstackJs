function normalSum(a,b) {
  return a+b
}

console.log(`Soma normal: ${normalSum(2,2)}`)

const anonymousSum = function(a,b) {
  return a + b
}

console.log(`Soma anonima: ${anonymousSum (3,3)}`)

const arrowSum = (a,b) => {
  return a + b
}

console.log(`Soma arrow function: ${arrowSum (4,4)}`)

const subtract = (a,b) => a - b

console.log(`Subtração: ${subtract(20,10)}`)

const double = number => {
  return number * 2
}

console.log(`Dobro: ${double(6)}`)

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startWithP = towns.filter(town => town[0] === 'P')
console.log(startWithP)
