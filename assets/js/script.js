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

    // Grab the button for displaying instructions
    const instructionsButton = document.getElementById("instructions-button");
    // Grab the section containing the instructions
    const instructionsSection = document.getElementById("instructions");
    // Grab the home button
    const homeButton = document.getElementById("home-btn");
    // Grab the color display box
    const colorBox = document.getElementById("color-box");
    // Grab the input field for user's color guess
    const colorGuess = document.getElementById("color-guess");
    // Grab the button for submitting user's guess
    const submitButton = document.getElementById("submit-button");
    // Grab the element for displaying the user's correct guess count
    const scoreDisplay = document.getElementById("correct");
    // Grab the element for displaying the user's incorrect guess count
    const scoreDisplay2 = document.getElementById("incorrect");
    // Grab the container for the game section
    const gameContainer = document.getElementById("game-container");


    //Displays initial guesses as 0
    let correctGuesses = 0;
    let incorrectGuesses = 0;

    // Add the hide class to hide the instructions on initial page load
    instructionsSection.classList.add("hide");

    /**
     * Event listeners for opening and closing Instructions area
    */

    instructionsButton.addEventListener('click', function () {
        instructionsSection.style.display = 'block';
    });

    homeButton.addEventListener('click', function () {
        instructionsSection.style.display = 'none';
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

    // Displays error message alert if empty input is entered
    function validate() {
        if (colorGuess.value === "") {
          alert("Please enter a color from the options provided.");
          return false;
        } else {
          return true;
        }
      }      

    // Processes user guess even if they used capital letters unlike our predefined 
    function handleGuess() {
        // Convert user's input to lowercase
        const guessedColor = colorGuess.value.toLowerCase();
        // Check if user's input is empty
        if (!validate()) {
            return;
        }
        // Set the color display box to a randomly generated color and get the color value
        const correctColor = setColor();
        // Creates a message to user about result of their guess and increments the scoreboard accordingly
        if (guessedColor === correctColor) {
            correctGuesses++;
            scoreDisplay.textContent = correctGuesses;
            // If the guessed color matches the correct color, the correctGuesses counter is incremented and the correct guess message is displayed.
            document.getElementById("result-message").textContent = `The correct color was ${correctColor}.`;
        } else {
            incorrectGuesses++;
            scoreDisplay2.textContent = incorrectGuesses;
            // If the guessed color is incorrect, the incorrectGuesses counter is incremented and the incorrect guess message is displayed.
            document.getElementById("result-message").textContent = `The correct color was ${correctColor}.`;
        }
    }


    /**
    * Adds functionality to the submit button and the color guess input field.
    * */

    //When the submit button is clicked, the handleGuess function is called.
    submitButton.addEventListener("click", handleGuess);

    colorGuess.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            //When the user presses the Enter key in the color guess input field, the handleGuess function is called.
            handleGuess();
        }
    });

    // set focus on colorGuess after it's fully loaded
    document.addEventListener("DOMContentLoaded", function () {
        colorGuess.focus();
    });

    // set focus on colorGuess after it's fully loaded
    setTimeout(() => {
        colorGuess.focus();
    }, 0);

});
