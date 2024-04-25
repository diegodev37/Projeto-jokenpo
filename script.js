const result = document.querySelector('.result')
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

/*
humanScoreNumber ==>> Camel case
GAMER_OPTIONS ==>> Snake case

ENUMS

*/

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPERS: 'papers',
    SCISSORS: 'scissors'
}





const playHuman = (humanChoice) => {

    palyThegamer(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPERS, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const palyThegamer = (human, machine) => {
    
    if (human === machine) {
        result.innerHTML = "Deu empate!"
    }
    else if ((human === GAME_OPTIONS.PAPERS && machine === GAME_OPTIONS.ROCK) || (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) || (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPERS)) {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Vegeta Ganhou!"
    }

    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Goku Ganhou!"

    }


}

