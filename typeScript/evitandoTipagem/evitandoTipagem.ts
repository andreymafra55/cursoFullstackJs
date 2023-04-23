//Case 1
function sendSpaceship(spaceship: {pilot: string, copilot?: string}) {

}

sendSpaceship({pilot: 'Andrey',copilot:'Heitor'})
sendSpaceship({pilot: 'Bolt'})

//-------------------------------------------------------//
//Case 2
let input:unknown

input = 'Teste'
input = 20
input = []

let text: string

//-------------------------------------------------------//
//Case 3

let test: any 

test = 'Teste'
test = 20
test = []

text = test

//-------------------------------------------------------//
//Case 4

function verification(teste) {
  if(teste){

  }else {
    let check: never
    return check
  }
}