// psuedo coding
//


function introduction () {

    var promptAnswer = prompt ("Do you want to play")

    if (promptAnswer === "Yes" || promptAnswer === "yes") {
      alert ("You are about to play HangMan.  Enter your guess below in the box.");
    }

    else {
      alert ("Goodbye");
    }
}

introduction ()
// function myFunction() {
//     var person = prompt("Please enter your name", "Harry Potter");
//     if (person != null) {
//         document.getElementById("demo").innerHTML =
//         "Hello " + person + "! How are you today?";
//     }
// }

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

function getGuess () {
  var guessVar = document.getElementById('guess').value

  if (guessVar.length === 0) {
    alert('Please enter a real value into the text box');

  }
  else {
    alert ("You guessed " + guessVar);
  }
}
