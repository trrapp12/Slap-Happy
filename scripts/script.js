console.log("connected to scripts.js")

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
};

var initialObject = {
  maxtries: 10,
  tries: 0,
  guessDisplayButton: [],
  word: arrWords.randomElement(),
  turnsLeft: 10
};

function reset() {

  initialObject.maxtries = 10;
  initialObject.tries = 0;
  initialObject.guessDisplayButton = [];
  initialObject.word = arrWords.randomElement(),
  initialObject.turnsLeft = 10
  console.log(initialObject);
}


console.log(initialObject.word);

function test () {return document.getElementById("input1").value.toLowerCase()};

function displayMessage (message) {
    var loseWindow = document.getElementById("guessDisplayII");
    if (loseWindow.style.visibility === "visible") {
      loseWindow.style.visibility = "hidden";
    } else {
      loseWindow.style.visibility = "visible";
      loseWindow.innerHTML = message;
      setTimeout(() => loseWindow.style.visibility = "hidden", 2500);
    }
}

function split () {
  return this.word.split("")
};


function displayWord (text) {
  document.getElementById("display").innerHTML= text;
};


function win () {

  var audio2 = new Audio('media/ES_Happy_Birthday_33_SFX_Producer.mp3');
  initialObject.answerArr = initialObject.word.split("")

  for (var i = 0; i < initialObject.answerArr.length; ++i) {
     if (initialObject.answerArr[i] !== initialObject.guessDisplayArr[i]) return true;
   }
  //  document.getElementById("deathmessage").innerHTML= "You won the game";
  displayMessage("Happy Birthday!!! You're the winner!!!");
  audio2.play();
   reset();
};


function countCharacters () {
    initialObject.guessDisplayArr = [];

    initialObject.answerArr = initialObject.word.split("")
    console.log(initialObject.answerArr);


    for (let i = 0; i < initialObject.answerArr.length; i++ ) {
      initialObject.guessDisplayArr.push(" _ ");
      console.log(initialObject.guessDisplayArr);
    };
    document.getElementById("guessDisplay").innerHTML = initialObject.guessDisplayArr.join("");
};


function exchangeValues (guess) {
  i = initialObject.answerArr.indexOf(guess);

  while (i >= 0) {
    initialObject.guessDisplayArr[i] = guess;
    console.log(guess);
    console.log(initialObject.guessDisplayArr);
    i = initialObject.answerArr.indexOf(guess, i+1);

 };

 document.getElementById("guessDisplay").innerHTML = initialObject.guessDisplayArr.join("");
};


function compareGuess () {

  let guess = test();
  console.log(guess);

   exchangeValues(guess);

   depricateTries();

};


function myFunction() {
    let guessLetterButton =  test();
    // let guessDisplayButton = [];
    let text = "";

    for (i = 0; i < guessLetterButton.length ;i++) {
        initialObject.guessDisplayButton.push(guessLetterButton);
        console.log(initialObject.guessDisplayButton);

        document.getElementById("demo").innerHTML = initialObject.guessDisplayButton;

    };
    compareGuess();

    win();
};


function depricateTries () {

  var audio = new Audio('media/233579__roivasugo__boo-you-suck.wav');

  if (initialObject.tries < initialObject.maxtries) {
    initialObject.tries += 1;
    initialObject.turnsLeft -= 1;
    console.log(initialObject.tries);
  }

  else { audio.play();
    displayMessage("You done ran out of turns!!! You lose!!!");
  return
  };
};

window.onload = function () {

  countCharacters ();
  displayWord();
};
