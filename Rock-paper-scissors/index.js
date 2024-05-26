/*

>>> : Rock - Paper - Scissor : 

>>> : It is a Game . 


*/


const choices = ['Rock','Paper','Scissor']

const playerdis = document.getElementById("playerDisplay")
const computerdis = document.getElementById("computerDisplay")
const resdis = document.getElementById("resultDisplay")
const pdis = document.getElementById("playerScoreDisplay")
const cdis = document.getElementById("computerScoreDisplay")
let playerscore = 0;
let computerscore = 0;


// Function is created for the functioning of game.

function playgame(playerChoice){

  const computerChoice = choices[Math.floor(Math.random()*3)]
  
  let result = ""
  
  if (playerChoice === computerChoice) {
    result = "It's a tie!"
  }
  
  else {
    switch(playerChoice){
      case "Rock":
        result = (computerChoice === "Scissor")?"YOU WIN !":"YOU LOSE!"
        break;
      case "Paper":
        result = (computerChoice === "Rock")?"YOU WIN !":"YOU LOSE!"
        break;
      case "Scissor":
        result = (computerChoice === "Paper")?"YOU WIN !":"YOU LOSE!"
        break;
    }
  }


  playerdis.textContent = `Player: ${playerChoice}`
  computerdis .textContent =`Computer: ${computerChoice}`
  resdis.textContent = result

  resdis.classList.remove("greenText","redText")

  switch(result) {
    case "YOU WIN !":
      resdis.classList.add("greenText")
      playerscore++
      pdis.textContent = playerscore
      break;
    case "YOU LOSE!":
      resdis.classList.add("redText")
      computerscore++
      cdis.textContent = computerscore
      break;
  }
}