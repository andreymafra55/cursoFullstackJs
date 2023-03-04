function sum (...numbers) {
  return numbers.reduce((accum,num) => accum + num,0 )
}

console.log(sum(1,1))
console.log(sum(1,1,2))
console.log(sum(1,1,2,5,7,8,9,5,6,1))