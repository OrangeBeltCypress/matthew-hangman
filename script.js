const words = ["avian", "grey", "raven", "crow", "verdun", "pugs", "dino", "war", "godzilla", "sky", "grain", "mewing", "mogging", "looksmaxxing"]



let selectedWord = words[Math.floor(Math.random() * words.length)];

let correctLetters = [];
let wrongLetters = [];

const word = document.getElementById('word'); 
const winner = document.querySelector('.winner');
const wrong = document.querySelector('.wrong'); 

let wg = 0; 


function displayWord() {
  let display = selectedWord.split('').map(letter => {
    if (correctLetters.includes(letter)) {
      return letter;
    } else {
      return ' _ ';
    }
  }).join('');
  
  word.innerHTML = display;
  
}

displayWord();

window.addEventListener('keyup', function(e) {
    let guess = e.key;
    if(wg == 10){
      winner.innerHTML = "Mission Failed. (Reload to try again) - The code was " + selectedWord;
    }else{
      if (selectedWord.includes(guess)) {
        if (!correctLetters.includes(guess)) {
          for(let i = 0; i < selectedWord.length; i++){
              if(selectedWord.charAt(i) === guess){
                  correctLetters.push(guess);
              }
          }
          displayWord();
        } 
      } else {
      
        if (!wrongLetters.includes(guess)) {
          wg++; 
          wrongLetters.push(guess);
          wrong.innerHTML = wrong.innerHTML + " " + guess; 
        }
      }
      
      if (correctLetters.length === selectedWord.length) {
          winner.innerHTML = "Mission Success";
  
      }
    }
    
   
  });