// function variableObjectFunc (word, guessDisplayArr, answerArr, tries) {
//   this.word = word;
//   this.guessDisplayArr = guessDisplayArr;
//   this.answerArr = answerArr;
//   this.tries = tries;
// };



let word = "cheese"
let guessDisplayArr = []
let answerArr = word.split("");
let tries = 0


function countCharacters () {

    for (let i = 0; i < answerArr.length; i++ ) {
      guessDisplayArr.push(" _ ");
      console.log(guessDisplayArr);
    };
    document.getElementById("guessDisplay").innerHTML = guessDisplayArr;
};


function compareGuess () {

  let guess = test();
  console.log(guess);

  function exchangeValues () {
    i = answerArr.indexOf(guess);

    while (i >= 0) {
      guessDisplayArr[i] = guess;
      console.log(guess);
      console.log(guessDisplayArr);
      i = answerArr.indexOf(guess, i+1);
   };
   document.getElementById("guessDisplay").innerHTML = guessDisplayArr;
 };
   exchangeValues();

   depricateTries(tries);
   console.log(tries);
};


function myFunction() {
    let guessLetterButton =  test();
    let guessDisplayButton = [];
    let text = "";

    for (i = 0; i < guessLetterButton.length ;i++) {
        guessDisplayButton.push(guessLetterButton);
        console.log(guessDisplayButton);
        document.getElementById("demo").innerHTML = guessDisplayButton;
    };
    compareGuess();
    return false;
};


//this gets the value of the button//
function test () {return document.getElementById("input1").value};

//notice that text is not a variable, it is connected to displayWord so it takes what we pass into that parameter//
function displayWord (text) {
  document.getElementById("display").innerHTML= text;
};

function depricateTries (tries) {
  while (tries < 8) {
    tries += 1;
    break
  };
  return tries;
  console.log(tries);
};

window.onload = function () {
  let word = "cheese"
  countCharacters (word);
  displayWord(word);
};

//
