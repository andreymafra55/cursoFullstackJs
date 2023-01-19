function addPlayer() {
  const position = document.getElementById('position').value
  const name = document.getElementById('name').value
  const number = document.getElementById('number').value

  const confimation = confirm("Escalar " + name + " como " + position + " ?")

  if(confimation){
    const teamlist = document.getElementById('team-list')
    const playerItem = document.createElement('li')
    playerItem.id = 'player-' + number
    playerItem.innerText = position + ":" + name + " (" + number + ")"

    teamlist.appendChild(playerItem)
    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
  }
}

function removePlayer() {
  const number = document.getElementById('numberToRemove').value

  const playerToRemove = document.getElementById('player-' + number)

  const confirmation = confirm('Remover o Jogador' + playerToRemove.innerText + '?')

  if(confirmation ) {
    document.getElementById('team-list').removeChild(playerToRemove)
    document.getElementById('numberToRemove').value = ''
  }
}

