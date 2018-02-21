$(document).ready(function(){

var wins=0;
var losses=0;
//Computer will generate a random number between 19-120
var randomNumber;
console.log(randomNumber);

//display random number in randome number box
//text is jQuery specific method and have to use jQuery
//The playor score starts at zero, displayed to the player
var playerScore;

//4 crystals have (hidden) random number between 1-12

//(4 crystals displayed as buttons on the page, above the player's score)
//WHEN clicked on by the player each crystal will add a specific amount of points to the player's total score counter
$(".jewel-red").click(function(){
    console.log("red")
    var value =parseInt($(this).val())
    console.log($(this).val())
    playerScore+=value
    $(".totalScore").text(playerScore);
    checkWin();
});

$(".jewel-orange").click(function(){
    console.log("orange")
    var value =parseInt($(this).val())
    console.log($(this).val())
    playerScore+=value
    $(".totalScore").text(playerScore);
    checkWin();
});

$(".jewel-green").click(function(){
    console.log("green")
    var value =parseInt($(this).val())
    console.log($(this).val())
    playerScore+=value
    $(".totalScore").text(playerScore);
    checkWin();
});

$(".jewel-blue").click(function(){
    console.log("blue")
    var value =parseInt($(this).val())
    console.log($(this).val())
    playerScore+=value
    $(".totalScore").text(playerScore);
    checkWin();
});
//Update the player's total score counter


//the player wins if the player's total score = the random number from the   beginning of the game

//the player loses if their score goes above the random number
function checkWin(){
    if(playerScore===randomNumber){
        wins++
        $(".wins").text(wins);
        $(".message").text("You're the greatest crytal player ever");
        resetGame()
    }
    else{
        if(playerScore>randomNumber){
                losses++
                $(".losses").text(losses);
                $(".message").text("You lose");
                resetGame()
        }
    }
}



//reset the game if the player wins or loses 
    //player should see a new random number
    function resetGame(){
        var crystal1 = Math.floor(Math.random() * (12)) + 1;
        console.log(crystal1,"number is valid")
        var crystal2 = Math.floor(Math.random() * (12)) + 1;
        console.log(crystal2, "number is valid")
        var crystal3 = Math.floor(Math.random() * (12)) + 1;
        console.log(crystal3, "number is valid")
        var crystal4 = Math.floor(Math.random() * (12)) + 1;
        console.log(crystal4, "number is valid")

        $(".jewel-red").val(crystal1)
        $(".jewel-orange").val(crystal2)      
        $(".jewel-green").val(crystal3)
        $(".jewel-blue").val(crystal4)
        
        randomNumber = Math.floor(Math.random() * (102)) + 19;
        console.log(randomNumber);

//display random number in randome number box
//text is jQuery specific method and have to use jQuery
        $(".randomNumber").text(randomNumber);
        playerScore =0;
    }

    //4 crystals have new hidden number

    //player's score resets to zero
        resetGame()
//Track and have a counter for number of games
});