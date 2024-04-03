// nested if else

// winning number 24

// if 24 your guess is right
// if 17 too low
// if 30 too high

let winningNumber = 24;
userGuess = +prompt("Guess a number");
console.log(userGuess);

if(userGuess === winningNumber){
    console.log("Your Guess is right!!");
}
else{
    if(userGuess < winningNumber){
        console.log("Too Low!!!");
    }
    else{
        console.log("Too High");
    }
}