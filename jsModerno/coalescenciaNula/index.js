//Exemplo 1
/*const a = 0 // false

const b = null // false

const c = 'Teste' // true

console.log(a || b || c)

console.log(a ?? b ?? c)
*/

//Exemplo 2

let a = 0

let b = a || 42

console.log(a,b)

b = a ?? 42

console.log(a,b)