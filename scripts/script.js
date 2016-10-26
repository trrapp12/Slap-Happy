

var initialObject = {
  maxtries: 8,
  tries: 0,
  guessDisplayButton: [],

};


function test () {return document.getElementById("input1").value};


function split () {
  return this.word.split("")
};


function displayWord (text) {
  document.getElementById("display").innerHTML= text;
};


function win () {
  initialObject.word = "cheese";
  initialObject.answerArr = initialObject.word.split("")

  for (var i = 0; i < initialObject.answerArr.length; ++i) {
     if (initialObject.answerArr[i] !== initialObject.guessDisplayArr[i]) return true;
   }
   document.getElementById("deathmessage").innerHTML= "You have won the game";
   return false;
};


function countCharacters () {
    initialObject.word = "cheese";

    initialObject.guessDisplayArr = [];

    initialObject.answerArr = initialObject.word.split("")
    console.log(initialObject.answerArr);


    for (let i = 0; i < initialObject.answerArr.length; i++ ) {
      initialObject.guessDisplayArr.push(" _ ");
      console.log(initialObject.guessDisplayArr);
    };
    document.getElementById("guessDisplay").innerHTML = initialObject.guessDisplayArr;
};


function exchangeValues (guess) {
  i = initialObject.answerArr.indexOf(guess);

  while (i >= 0) {
    initialObject.guessDisplayArr[i] = guess;
    console.log(guess);
    console.log(initialObject.guessDisplayArr);
    i = initialObject.answerArr.indexOf(guess, i+1);

 };

 document.getElementById("guessDisplay").innerHTML = initialObject.guessDisplayArr;
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

  if (initialObject.tries < initialObject.maxtries) {
    initialObject.tries += 1;
    console.log(initialObject.tries);
  }

  else { document.getElementById('audio').play();
  document.getElementById("deathmessage").innerHTML= "Your number of tries has expired" };
};

window.onload = function () {
  countCharacters ();
  displayWord();
};
