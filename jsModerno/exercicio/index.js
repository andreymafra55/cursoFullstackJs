const mediaAritimetica = (...numbers) => {
  const soma = numbers.reduce((accum,num) => (accum + num),0 )
  return soma/numbers.length
}

console.log(`Média Aritmética Simples: ${mediaAritimetica(3, 6, 10, 9)}`)

const mediaPonderada = (...numeros) => {
  const soma = numeros.reduce((accum,{number ,weight}) => accum + (number * (weight ?? 1)),0 )
  const weightSum = numeros.reduce((accum,numero) => accum  + (numero.weight ?? 1),0)
  return soma/weightSum
}

console.log(`Média Ponderada: ${mediaPonderada(
  { number: 9, weight: 3 },
  { number: 7 },
  { number: 10, weight: 2 },
)}`)

const mediana = (...numeros) => {
  const ordenar = [...numeros].sort((a,b) => a - b )
  const meio = Math.floor(ordenar.length/2)
  if(ordenar.length % 2 !== 0) {
    return ordenar[meio]
  } else {
  const primeiro = ordenar[meio -1]
  const segundo = ordenar[meio]
  return mediaAritimetica(primeiro,segundo)
  }
}

console.log(`Mediana: ${mediana(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${mediana(15, 14, 8, 7, 3)}`)

const moda = (...numbers) => {
  const quantidade = numbers.map(num => [
    num,
    numbers.filter(n => num == n).length
  ])

  quantidade.sort((a,b) => b[1] - a[1])

  return quantidade[0][0]
}

console.log(`Moda: ${moda(1, 1, 99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)