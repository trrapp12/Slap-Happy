
function split () {
  return this.word.split("");
}

var initialObject = {
  word: 'cheese',
  guessDisplayArr: [],
  answerArr: split,
  tries: 0,
};

  console.log(initialObject.word);
  console.log(initialObject.answerArr());

// let word = "cheese"
// let guessDisplayArr = []
// let answerArr = word.split("");
// let tries = 0


function countCharacters () {

    for (let i = 0; i < initialObject.answerArr().length; i++ ) {
      initialObject.guessDisplayArr.push(" _ ");
      console.log(initialObject.guessDisplayArr);
    };
    document.getElementById("guessDisplay").innerHTML = initialObject.guessDisplayArr;
};


function compareGuess () {

  let guess = test();
  console.log(guess);

  function exchangeValues () {
    i = initialObject.answerArr().indexOf(guess);

    while (i >= 0) {
      initialObject.guessDisplayArr[i] = guess;
      console.log(guess);
      console.log(initialObject.guessDisplayArr);
      i = initialObject.answerArr().indexOf(guess, i+1);
   };
   document.getElementById("guessDisplay").innerHTML = initialObject.guessDisplayArr;
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
  countCharacters (initialObject.word);
  displayWord(initialObject.word);
};

//
