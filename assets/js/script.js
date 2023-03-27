document.addEventListener("DOMContentLoaded", function () {

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

  const instructionsButton = document.getElementById("instructions-button"); // Grab the button for displaying instructions
  const instructionsSection = document.getElementById("instructions"); // Grab the section containing the instructions
  const homeButton = document.getElementById("home-btn"); // Grab the home button
  const colorBox = document.getElementById("color-box"); // Grab the color display box
  const colorGuess = document.getElementById("color-guess"); // Grab the input field for user's color guess
  const submitButton = document.getElementById("submit-button"); // Grab the button for submitting user's guess
  const scoreDisplay = document.getElementById("correct"); // Grab the element for displaying the user's correct guess count
  const scoreDisplay2 = document.getElementById("incorrect"); // Grab the element for displaying the user's incorrect guess count
  const gameContainer = document.getElementById("game-container"); // Grab the container for the game section
  const instructionsHidden = document.getElementById("instructions-hidden"); // Grab the element containing the "hidden" class

  //Displays initial guesses as 0
  let correctGuesses = 0;
  let incorrectGuesses = 0;

  /**
   * Event listeners for opening and closing Instructions area
   */

  instructionsButton.addEventListener("click", function () {
    instructionsSection.classList.toggle("instructions-hidden"); // Toggle the class to show/hide the instructions section
    gameContainer.classList.toggle("instructions-hidden"); // Toggle the class to show/hide the game section
  });

  homeButton.addEventListener("click", function () {
    gameContainer.classList.remove("instructions-hidden"); // Remove the class to show the game section
    instructionsHidden.classList.add("instructions-hidden"); // Add the class to hide the hidden intructions
    instructionsSection.classList.add("instructions-hidden"); // Add the class to hide the instructions section
  });

  homeButton.addEventListener("click", function () {
    instructionsSection.style.display = "block"; // Show the instructions section
  });

  // Grabs a color from the predefined array to load into css colorbox
  function generateRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  // Set the background color of the color display box to a randomly generated color 
  function setColor() {
    const color = generateRandomColor();
    colorBox.style.backgroundColor = color;
    return color;
  }

  // Processes user guess even if they used capital letters unlike our predefined 
  function handleGuess() {
    const guessedColor = colorGuess.value.toLowerCase(); // Convert user's input to lowercase
    const correctColor = setColor(); // Set the color display box to a randomly generated color and get the color value

    // Creates a message to user about result of their guess and increments the scoreboard accordingly
    if (guessedColor === correctColor) {
      correctGuesses++;
      scoreDisplay.textContent = correctGuesses;
      document.getElementById("result-message").textContent = `The correct color was ${correctColor}.`; // If the guessed color matches the correct color, the correctGuesses counter is incremented and the correct guess message is displayed.
    } else {
      incorrectGuesses++;
      scoreDisplay2.textContent = incorrectGuesses;
      document.getElementById("result-message").textContent = `The correct color was ${correctColor}.`; // If the guessed color is incorrect, the incorrectGuesses counter is incremented and the incorrect guess message is displayed.
    }
  }

  //Adds functionality to the submit button and the color guess input field.


  submitButton.addEventListener("click", handleGuess); //When the submit button is clicked, the handleGuess function is called.

  colorGuess.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleGuess(); //When the user presses the Enter key in the color guess input field, the handleGuess function is called.
    }
  });

});

// This line of code adds the "show" class to the gameContainer, which displays it on the page.
gameContainer.classList.add("show");