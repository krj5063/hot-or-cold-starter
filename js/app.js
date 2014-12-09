
$(document).ready(function(){

//create random number
var secretNumber = (Math.floor((Math.random()*100)+1))-0;
    console.log(secretNumber);
//create random number
    
//USER GUESS   
$("#guessButton").click(function(a) {
    a.preventDefault();
    guessed = ($("#userGuess").val())-0;
    //console.log(guessed);
    
    if ((guessed % 1) != 0)  //enters decimal or text
        {
            alert("You entered an invalid character or number, please enter a two digit number");
        }
    else {
    $("#guessList").append(guessed+"  "+"  ");

        if (guessed==secretNumber) 
            {
                $("#feedback").text("Congrats, you win!");
            } 
          else if (Math.abs(guessed - secretNumber) > 15) 
            {
                $("#feedback").text("Cold");
            }
            else if (Math.abs(guessed - secretNumber) < 5) 
            {
                $("#feedback").text("HOT HOT HOT!");
            }
            else 
            {
                $("#feedback").text("Kinda Hot!");
            }
    
    $("#count").html(function(i, val) {
        return +val+1 
    });

    }
});
//USER GUESS

    
//reset the game
$(".new").click(function(b) {
    var secretNumber = (Math.floor((Math.random()*100)+1))-0;
    console.log(secretNumber);
    b.preventDefault();
    $("#feedback").text("Enter your guess!");
    $("#count").text("0");
    $("#guessList").empty();
});
//reset the game

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


