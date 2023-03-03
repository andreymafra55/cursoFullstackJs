//Desestruturando Objetos

const person = {
  name: 'Andrey',
  job: 'Estudante de t.i',
  parents: ['Adriano','Joelma'],
  hardSkills: [['JavaScript'],['Html'],['Css'],['PHP'],['Laravel']]
}

const {job,name,parents} = person
console.log(parents)

//Desestruturando Array  

const [father,mother] = parents
console.log(father)
console.log(mother)

//Desestruturando Functions 

function createUser({name ,job ,parents}) {
  const id = Math.floor(Math.random() * 9999 ) 
  return {
    id,
    name, 
    job,
    parents
  }
}

const Andrey = createUser(person)
console.log(Andrey)