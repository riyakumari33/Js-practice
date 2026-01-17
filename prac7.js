//User enters a max number & then tries to guess a random generated number between 1 and max

let max = prompt("Enter your max number:");
let random = Math.floor(Math.random()*max)+1;

let guess = prompt("Guess the number");
while(true){
    if(guess == random){
        console.log("congrats!, you guessed it right.");
    }else if(guess<random){
        prompt("wrong guess, you guessed too small.Try again!!");
    }else{
        prompt("wrong guess, you guessed too large.Try again!!");
    }
}