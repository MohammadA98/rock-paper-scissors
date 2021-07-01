function computerPlay() {
  const moves = [
    "Rock",
    "Paper",
    "Scissors"
  ]
  return moves[Math.floor(Math.random() * moves.length)].toLowerCase();
}




function game() {
  for (var i = 0; i < 5; i++) {
    function playRound(playerSelection, computerSelection) {
      if (playerSelection == "rock" && computerSelection == "paper") {
        return "Paper beats rock! You lose.";
      } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Paper beats rock! You win!";
      } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Rock beats scissors! You lose.";
      } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Rock beats scissors! You win!";
      } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Scissors beats paper! You lose.";
      } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Scissors beats paper! You win!";
      } else {
        return "it's a tie!";
      }
    }

    const playerSelection = prompt("Pick rock, paper or scissors: ").toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));


  }

}

game();
