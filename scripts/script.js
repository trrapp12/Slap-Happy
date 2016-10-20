let word = "cheese"
let guessArr = []


function countCharacters (word) {
  let splitWordArr = word.split("");
  console.log(splitWordArr);
  let guessDisplayArr = [];

    for (let i = 0; i < splitWordArr.length; i++ ) {
      guessDisplayArr.push(" _ ");
      console.log(guessDisplayArr);
    }
    document.getElementById("guessDisplay").innerHTML = guessDisplayArr;
};

// function guessLetter (word, guess) {
//   let guessedLetterArr = [];
//   let currentGuess = element.getAttribute(attributeName)
//     for (let i = 0; i < splitWordArr.length; i++ ) {
//       if {i =
//
//       }
//     }
//
// }

function displayWord (text) {
  document.getElementById("display").innerHTML= text;
}


function myFunction() {
    let guessLetterButton = document.getElementById("frm1");
    let text2 = "";
    let i;
    for (i = 0; i < guessLetterButton.length ;i++) {
        text2 += guessLetterButton.elements[i].value;
        document.getElementById("demo").innerHTML = text2;
    }

}

displayWord (word)
countCharacters(word)
