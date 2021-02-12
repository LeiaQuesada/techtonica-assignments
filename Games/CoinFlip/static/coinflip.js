/*
Coin Flip
Make a web page where you can flip a coin and it comes up heads 50% of times and tails 50% of times.

Extensions:

Add a box where the user can say how many coins they want to flip. Then display that many coins and flip them all randomly.
*/

const coinFlips = document.getElementById("numberChosen");
const image = document.getElementById("image");
const userResultAlert = document.getElementById("userAlert");
const display = document.getElementsByClassName("display");


document.getElementById("game-form").onsubmit = () => {
    // number of chances user wants
    let flips = coinFlips.value;
    // random result of heads
    let heads = 0; // heads will be 1 for randomNum
    let tails = 0; // tails will be 2 for randomNum

    // display heads or tails consecutively after each call to flip, add coins raining in the background later
    for (let i = 0; i <= flips; i++) {
        let randomNum = Math.round(Math.random() + 1);
        if (randomNum === 1) {
            // display heads coin   
            console.log("Did this work? " + randomNum);
            window.setTimeOut(image.innerHTML='<img src="./static/head.png>" alt="For this turn, you got heads!>', delay (seconds * 1000));
            heads++
        } else
        if (randomNum === 2) {
            // display tails coin
            console.log("How about this? " + randomNum);
            window.setTimeOut(image.innerHTML='<img src="./static/tail.png>" alt="Oh dear, for this turn, you got tails!>', delay (seconds * 1000));
            tails++;
        }
    }
    // if heads result === tails result 
    console.log(heads);
    console.log(tails);
    if (heads === tails) {
        // restart? undecided? milton meh?

    // if heads results are greater than tails
    } else
    if (heads > tails) {
        // congratulate player
        userResultAlert.textContent = "Roses are Red, violets are Blue, Milton LOVES you!!!";
    
        // play video of cute cat with big eyes about to jump at screen, cute cat purring, some loving image with a cat

    // if tails results are greater
    } else {
        // tell player to duck, or run
        userResultAlert.textContent = "Roses are Red, violets are Blue, Milton said, \"Not today, Boo Boo!!!\"";
        //play video of cat with claws out leaping at screen, display cat with stank attitude, nose turned up, claws out, sticking tongue out, 

    }
    // create a reset game button. 


};

// accessibility considerations: make submission and text LARGER!!!!