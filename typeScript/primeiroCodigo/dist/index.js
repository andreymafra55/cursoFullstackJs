function sendSpaceship(name, captain) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: [],
    };
    alert(`A nave ${spaceship.name} comandada pelo capitao ${spaceship.captain} foi enviada em uma missao`);
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`);
    }
    else if (spaceship.speed < targetSpeed) {
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}...`);
    }
    else {
        alert(`Mantendo a velocidade da ${spaceship.name}...`);
    }
}
const spaceshipName = prompt('Insira o nome da nave a ser enviada');
const spaceshipCaptain = prompt('Insira o nome do capitão da nave');
const currtentship = sendSpaceship(spaceshipName, spaceshipCaptain);
const speed = Number(prompt('Insira a velocidade da nave'));
accelerate(speed, currtentship);
