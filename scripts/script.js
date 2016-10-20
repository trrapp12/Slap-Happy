let word = "cheese"
let guessDisplayArr = []
let tries = 8


function countCharacters (word) {
  let splitWordArr = word.split("");
  console.log(splitWordArr);
  // let guessDisplayArr = [];

    for (let i = 0; i < splitWordArr.length; i++ ) {
      guessDisplayArr.push(" _ ");
      console.log(guessDisplayArr);
    }
    document.getElementById("guessDisplay").innerHTML = guessDisplayArr;
};

//TODO: integrate this function into on-click//
function compareGuess () {
  let answer = word.split("");
  console.log(answer);

  let guess = document.getElementById("frm1").value;
  console.log(guess);

  let guessDisplayArr = []
  console.log(guessDisplayArr);

  for (let i = 0; i < answer.length; i++ ) {

      if (answer[i] === guess) {
      guessDisplayArr[i] = guess }

      else {
        guessDisplayArr.push("")
        console.log(guessDisplayArr);
      }
    };
    guessDisplayArr.push(" _ ");
    console.log(guessDisplayArr);
  };

function myFunction() {
    let guessLetterButton = document.getElementById("frm1");
    let guessDisplayButton = [];
    let text = "";

    for (i = 0; i < guessLetterButton.length ;i++) {
        guessDisplayButton.push(guessLetterButton.elements[i].value) ;
        // console.log(guessDisplayButton);
        document.getElementById("demo").innerHTML = guessDisplayButton;
    };
    // compareGuess(word)
};

//notice that text is not a variable, it is connected to displayWord so it takes what we pass into that parameter//
function displayWord (text) {
  document.getElementById("display").innerHTML= text;
};

function counter () {
};

function endOfGame () {

};

window.onload = function () {
  let word = "cheese"
  countCharacters (word);
  displayWord(word);
};

compareGuess (word)
//
