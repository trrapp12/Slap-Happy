console.log("connected to scripts.js");

// pulls a random word from the words.js file
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};

// creates all sounds to be played
const audio = new Audio('media/233579__roivasugo__boo-you-suck.wav');
const audio2 = new Audio('media/ES_Happy_Birthday_33_SFX_Producer.mp3');
const submitAudio = new Audio('media/ES_Button_Push_4_SFX_Producer.mp3');

// sets display area for messages
const loseWindow = document.getElementById("winLoseMessageDisplay");
// initializes an object which will hold the numbers of tries, tries left, max number of tries, word, and letters guessed

var initialObject = {
  answerArr: [],
  maxtries: 9,
  tries: 0,
  guessDisplayButton: [],
  word: arrWords.randomElement(),
  turnsLeft: 10,
  win: false
};

function delay(ms) {
  console.log("line 19: entering delay()")
  return new Promise(resolve => setTimeout(resolve, ms))
};

// this function will reset the object (i.e. if the game is won)
function reset () {
// console.log place in code
    console.log("line 19: reset() started firing");
    // reinitialize values for initialObject
    initialObject.maxtries = 9;
    initialObject.tries = 0;
    initialObject.guessDisplayButton = [];
    initialObject.word = arrWords.randomElement();
    initialObject.turnsLeft = 10;
    initialObject.win = false;
    // check object key values
    console.log("line 25: reset() completed firing" + JSON.stringify(initialObject));
    // reset display to blank
    document.getElementById("guessDisplay").innerHTML = "";
    // reset Letters guessed
    document.getElementById("demo").innerHTML = "";
    // reset the turns left
    var turnsLeft = initialObject.turnsLeft;
    document.getElementById("turnsLeft").innerHTML = `Turns Left: ${turnsLeft}`;
      // restart the game
    countCharacters ();
}

// consoles the word selected for easier testing
console.log(initialObject.word);

function doubleGuessValidation (guess) {
  console.log("line 34: doubleGuessValidation() firing");
  var input = document.getElementById("input1").value.toLowerCase();
  if (initialObject.guessDisplayButton.includes(input)) {
    alert("you already guessed that letter!");
    return false;
  } else {
    console.log("line 35: doubleGuessValidation() fired successfully");
    return true;
  }
}
// function tests the input to make sure only letter characters are getting submitted, and only one at a time
function test () {
  console.log("line 46: test() firing");
  var letterRE = /[A-Za-z]/;
  var input = document.getElementById("input1").value.toLowerCase();
  // console.log("letterRE is: " + letterRE + ". And input is: " + input);
  if (input.match(letterRE) && input.length < 2) {
    return input;
  } else {
    alert("You Rascal! You either tried to guess more than one letter at once, or you tried to guess something that wasn't a letter. You won't get away with this!");
  }

}

// reusable function which creates a message to display (i.e if you win/lose)
function displayMessage (message) {
  console.log("line 60: displayMessage() firing");

    if (loseWindow.style.visibility === "hidden") {
      loseWindow.innerHTML = message;
      loseWindow.style.visibility = "visible";
      } else {
      loseWindow.innerHTML = message;
      loseWindow.style.visibility = "visible";
      setTimeout(() => {loseWindow.style.visibility = "hidden"}, 2500);
    }
}


// function holds logic to determine if the game is won or not
function win () {
// does not decide if you win, preforms actions of winning
  console.log("line 80: function win() firing");

  initialObject.answerArr = initialObject.word.split("");

  for (var i = 0; i < initialObject.answerArr.length; ++i) {
     if (initialObject.answerArr[i] !== initialObject.guessDisplayArr[i]) return true;
   }
  //  document.getElementById("deathmessage").innerHTML= "You won the game";
  audio2.play();
  displayMessage("Happy Birthday!!! You're the winner!!!");
  delay(2500).then(() => { reset() });
}

// function counts how many characters are in the word, and then displays approprate number of _ _ _ _
function countCharacters () {
  console.log("line 95: countCharacters() firing");
    initialObject.guessDisplayArr = [];

    initialObject.answerArr = initialObject.word.split("");
    console.log(initialObject.answerArr);


    for (let i = 0; i < initialObject.answerArr.length; i++ ) {
      initialObject.guessDisplayArr.push(" _ ");
      console.log(initialObject.guessDisplayArr);
    }
    document.getElementById("guessDisplay").innerHTML = initialObject.guessDisplayArr.join("");
}

// function puts the guessed character in the correct place in the partially displayed word
function exchangeValues (guess) {
  console.log("line 112: exchangeValues() firing");
  i = initialObject.answerArr.indexOf(guess);

  while (i >= 0) {
    initialObject.guessDisplayArr[i] = guess;
    console.log(guess);
    console.log(initialObject.guessDisplayArr);
    i = initialObject.answerArr.indexOf(guess, i+1);

 }

 document.getElementById("guessDisplay").innerHTML = initialObject.guessDisplayArr.join("");
}

// function compares if guess is correct or not
function compareGuess () {
  console.log("line 128: compares() firing");
  let guess = test();
  console.log(guess);

   exchangeValues(guess);
   console.log("line 154. initialObject.answerArr is " + initialObject.answerArr + " and guess is: " + guess);
   if (initialObject.answerArr.includes(guess) === false) {
     depricateTries();
   } else {
     return;
   }

}

// funciton called on the submit button
function myFunction() {
  console.log("line 140: myFunction() firing");
  var check = doubleGuessValidation();

    submitAudio.play();


    if (check === false) {
      return;
    } else {
      let guessLetterButton =  test();
      // let guessDisplayButton = [];
      let text = "";

      for (i = 0; i < guessLetterButton.length; i++) {
        // guessDisplayButton is an array that olds old guesses so we can compare them with test() input to validate against double guesses
          initialObject.guessDisplayButton.push(guessLetterButton);
          console.log("line 176: initialObject.guessLetterButton in myFunction is: " + initialObject.guessDisplayButton);
          document.getElementById("demo").innerHTML = initialObject.guessDisplayButton;
      }

      compareGuess();
      win();
    }

}

// function works as counter to depricate tries
function depricateTries () {
  console.log("line 160: depricatesTries() firing");

  // var checkWin = win();
  if (initialObject.tries < initialObject.maxtries) {
    // if our attempts haven't exceeded the max tries, ...
    initialObject.tries += 1;
    initialObject.turnsLeft -= 1;
    var turnsLeft = initialObject.turnsLeft;
    document.getElementById("turnsLeft").innerHTML = `Turns Left: ${turnsLeft}`;
    console.log(initialObject.tries);
  }

  else if (initialObject.tries === initialObject.maxtries) {
    console.log("line 173: depricatesTries() else-if statement entered");
    audio.play();
    displayMessage("You done ran out of turns!!! You lose!!!");
    delay(2500).then(() => { reset() });
    return;
  }
}

// window onload
window.onload = function () {

  countCharacters ();

};

window
