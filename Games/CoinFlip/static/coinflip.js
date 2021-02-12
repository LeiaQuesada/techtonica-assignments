/*
Coin Flip
Make a web page where you can flip a coin and it comes up heads 50% of times and tails 50% of times.

Extensions:

Add a box where the user can say how many coins they want to flip. Then display that many coins and flip them all randomly.
*/

let coinFlips = document.getElementById("flipCount").value;

// default behavior is clearing the submission 
function(e) {
    if (e.preventDefault) e.preventDefault();
    return false;
}

let form = document.getElementById("game-form");
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}

// user picks and enters a number

// store the number as coinFlips

// display heads or tails consecutively after each call to flip, add coins raining in the background later

// if heads results are greater than tails, congratulate player

// play video of cute cat with big eyes about to jump at screen, cute cat purring, some loving image with a cat

// if tails results are greater, tell player to duck, or run

//play video of cat with claws out leaping at screen, display cat with stank attitude, nose turned up, claws out, sticking tongue out, 


// create a reset game button. 