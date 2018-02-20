var wins=0;
var losses=0;
//Computer will generate a random number between 19-120
var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
console.log(randomNumber);

//display random number in randome number box
document.getElementById("randomNumber").textContent=randomNumber;
//The playor score starts at zero, displayed to the player

//4 crystals have (hidden) random number between 1-12

//(4 crystals displayed as buttons on the page, above the player's score)
//WHEN clicked on by the player each crystal will add a      specific amount of points to the player's total score counter

//Update the player's total score counter

//the player wins if the player's total score = the random number from the   beginning of the game

//the player loses if their score goes above the random number

//reset the game if the player wins or loses 
    //player should see a new random number

    //4 crystals have new hidden number

    //player's score resets to zero

//Track and have a counter for number of games
