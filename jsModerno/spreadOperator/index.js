const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

//Clonando objetos iteraveis

const townsClone = [...towns]
console.log(townsClone)

//Spread em objects

const townsObj = {...towns}
const townsObjClone = {...townsObj}

townsObjClone.test = 'Test'

console.log(townsObj)
console.log(townsObjClone)