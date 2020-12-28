// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code. 
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
};

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
// i has already been declared above
do {
  console.log(i);
  i++;
} while (i <= 5 );

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (i = 1; i <= 5; i++) {
  console.log(i);
};

// Exercise 4. Now we want a loop that prints the integers 
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// while loop
let h = 10;
while (h > 0) {
  console.log(h);
  h--;
};

// do while loop
let j = 10;
do {
  console.log(j);
  j--;
} while (j > 0);

// for loop
for (let k = 10; k > 0; k--) {
  console.log(k);
};

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this 
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// while loop
let sevens = 7;
while (sevens < 28) {
  console.log(sevens);
  i++;
};

// do while loop
let sev = 7;
do {
  console.log(sev);
  i++;
} while (sev < 28);

// for loop
for (let toTwentySeven = 7; toTwentySeven < 28; i++) {
  console.log(toTwentySeven);
};

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc. 
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// while loop
let tens = 0;
while (tens <= 100) {
  console.log(tens);
  tens += 10;
};
// do while loop
let t = 10;
do {
  console.log(t);
  t += 10;
} while (t <= 100);

// for loop
for (tens = 10; tens <= 100; tens += 10) {
  console.log(tens);
};

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will 
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// this loop's conditional will always be met since the initial value meets the
// condition and the value is set to where it will never exceed the condition. To fix this,
// change the conditional value
let counterFour = 1;
while (counterFour >= -100) {
  console.log('HELP ME!');
  counterFour--;
};

// Exercise 8. Make a variable that contains your favorite integer. Write a loop 
// (your choice which type) that prints the integers from 0 to that number.
let favoriteInteger = 19;
for (let counter = 0; counter <= favoriteInteger; counter++) {
  console.log(counter);
};

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's 
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
// since previous declared favoriteInteger meets this exercise's integer limitation, I'll use it again
for (let num = 0; num <= 100; num++) {
  if (num === favoriteInteger) {
    console.log(num + " my favorite number!");
  } else {
    console.log(num + " not my favorite number");
  };
};

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or 
// doing some research and write down your thoughts in a comment below:
//
how would you decide which type of loop to use

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************")
}


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you? 
// Please answer in a comment below.
//

// Email your file to us or commit your file to GitHub and email us a link.
