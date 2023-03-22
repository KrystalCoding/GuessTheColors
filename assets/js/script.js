/**
 * Defines colors to be used in the main Color game block
*/

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
  ];

/**
 * Connects .js to .html via getElement grabber things
 */

const colorBox = document.getElementById("color-box");
const colorGuess = document.getElementById("color-guess");
const submitButton = document.getElementById("submit-button");
const scoreDisplay = document.getElementById("correct");
const scoreDisplay2 = document.getElementById("incorrect");

let correctGuesses = 0;
let incorrectGuesses = 0;

/**
 * Grabs a color from the predefined array to load 
 * into css colorbox
 */

function generateRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function setColor() {
  const color = generateRandomColor();
  colorBox.style.backgroundColor = color;
  return color;
}

/**
 * Processes user guess even if they used capital letters
 * unlike our predefined colors in the array 
 */

function handleGuess() {
  const guessedColor = colorGuess.value.toLowerCase();
  const correctColor = setColor();

/**
 * Creates a pop up message to user about result of their
 * guess and incriments the scoreboard accordingly
 */

  if (guessedColor === correctColor) {
    /**alert("You got lucky! Play again.");*/
    correctGuesses++;
    scoreDisplay.textContent = correctGuesses;

    document.getElementById("result-message").textContent = `The correct color was ${correctColor}.`;
  } else {
    /**alert("You failed miserably! Try again.");*/
    incorrectGuesses++;
    scoreDisplay2.textContent = incorrectGuesses;

    document.getElementById("result-message").textContent = `The correct color was ${correctColor}.`;
  }
}

/**
 * Adds functionality to submit button, both on the
 * basic level of passing the info back and forth, as
 * well as making it easy for the user to interact with
 */

submitButton.addEventListener("click", handleGuess);

colorGuess.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    handleGuess();
  }
});