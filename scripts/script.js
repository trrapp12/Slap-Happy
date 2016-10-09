alert ("HI")

function playGame () {
  var result = prompt('Do you want to play a game 2?');

  if (result === 'yes') {
    document.write('You win');
  }
  else {
    document.write('Game Over');
  }
}

console.log(playGame(result))
