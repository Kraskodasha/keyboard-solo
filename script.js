const wordContainer = document.querySelector(".word");
const words = ['monkey', 'lion', 'panther', 'tiger', 'elephant', 'giraffe'];
let currentWord = "";
let currentIndex = 0;

function generateRandomWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  currentIndex = 0;
  wordContainer.innerHTML = "";

  for (let i = 0; i < currentWord.length; i++) {
    const letterContainer = document.createElement("span");
    letterContainer.textContent = currentWord[i];
    wordContainer.appendChild(letterContainer);
  }
} 

document.addEventListener("keydown", function(event) {
  const spans = document.querySelectorAll(".word span");
  const pressedKey = event.key.toLowerCase();
  const currentChar = currentWord[currentIndex].toLowerCase();
  
  if (pressedKey != currentChar) {
    spans[currentIndex].classList.add("w");
  } else if (pressedKey === currentChar){
    spans[currentIndex].classList.remove("w");
    spans[currentIndex].classList.add("c");
    currentIndex++;
  }

  if (currentIndex === currentWord.length - 1) {
    setTimeout(generateRandomWord, 2000);
  }
});

generateRandomWord();