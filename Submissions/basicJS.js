// Basic JavaScript Practice

// ## Goal

// The goal of Basic JavaScript Practice is to ensure you are able to use the JavaScript programming language to solve challenges on your own and are able to use constructs like:

// - Function definitions
// - Mathematical functions
// - Return functions
// - Loops
// - Objects
// - Runtime Complexity

// To self-assess understanding of concepts.

// ## Motivation

// Practicing your newfound skills will solidify them for you. Completing exercises, writing out code a few extra times, and discussing it with others will help strengthen your understanding of functions, loops, objects and runtime complexity.

// ## Directions

// - Complete each Challenge in a separate repl.it or codepen.io project, and save the links all together in a document so you and your mentor can access them easily later.
// - Before next week begins, weaker concepts should be reviewed, discussed with peers, and if there is still confusion, discuss with your mentor.

// ## Challenges

// ### [Challenge 1] - Convert Inches to Meters

// Define a function called `metersToInches` that takes an input of the number of meters and outputs the result of the number of inches.

// **Hint:** `1 meter` equals `39.3701` inches.

// #### Results

// | input                | value     |
// | -------------------- | --------- |
// | metersToInches(0)    | 0         |
// | metersToInches(1)    | 39.3701   |
// | metersToInches(1.5)  | 59.05515  |
// | metersToInches(15.6) | 614.17356 |

function metersToInches(meters) {
    return meters * 39.3701;
}
// metersToInches(15.6);

// ### [Challenge 2] - Loop `n` Times

// Write a function named `loopThrough` that takes an argument that is a number and loops through and displays a message _“Hello World”_ that number of times.

// #### Results

// | input          | value                     |
// | -------------- | ------------------------- |
// | loopThrough(0) | Nothing displayed         |
// | loopThrough(1) | Message displayed 1 time  |
// | loopThrough(3) | Message displayed 3 times |

function loopThrough(num) {
    for (let i = 0; i < num; i++) {
        console.log('Hello World');
    }
}

// ### [Challenge 3] - Number sum

// Define a method called `calculateSum` to calculate the sum all the digits from 0 to an input number.

// | input            | value |
// | ---------------- | ----- |
// | calculateSum(0)  | 0     |
// | calculateSum(1)  | 1     |
// | calculateSum(3)  | 6     |
// | calculateSum(10) | 55    |
function calculateSum (num) {
    let total = 0;
    for (let i = 0; i < num; i++) {
        total += i
    }
    return total;
}
// ### [Challenge 4] - FizzBuzz

// Write a function called `fizzbuzz` that prints each number from 1 to the input on a new line.

// - For each multiple of 3, print "Fizz" instead of the number.
// - For each multiple of 5, print "Buzz" instead of the number.
// - For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// #### Results

// 1.
// fizzbuzz(0)
// Will result in the following (no) output:
// 2.
// fizzbuzz(16)
// Will result in the following output
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// ```

function fizzbuzz(num) { 
    for (let i = 0; i < num; i++) {
        if ( i % 3 === 0 && i % 5 === 0 ) {
            console.log(`FizzBuzz`);
        } else if ( i % 3 === 0 ) {
            console.log(`Fizz`);
        } else if ( i % 5 === 0 ) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
// fizzbuzz(16);




// ### [Challenge 5] Calculate Factorial Number

// A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number.

// For example, the value of `3` factorial, is `6`, which can be calculated by:

// ```
// 3 * 2 * 1
// ```

// The value of `10` factorial, for example, can be calculated by:

// ```
// 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
// ```

function getFactorial(num) {
    let total = 1;
    for (let i = 1; i <= num; i++) {
        total *= i;
    } 
    return total;
}
//getFactorial(3)



// ### [Challenge 6] Switch Statements

// Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria:
// The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

// #### Results

// sleep_in(False, False) → True

// sleep_in(True, False) → False

// sleep_in(False, True) → True

function sleep_in(weekday, vacation) {
    // if NOT a weekday and vacation is true
    // if (weekday === "False" || vacation === "True") {
    //     return true;
    // } else {
    //     return false;
    // }

    switch (true) {
        case (!weekday || vacation):
            console.log(true);
            break;
        default:
            console.log(false);
    }
}

// sleep_in(true, false);




// ### [Challenge 7] Accessing Arrays

// Write a function called common(a, b) with these criteria:
// Given 2 arrays of ints, a and b, return True if they have the same first element _or_ they have the same last element. Both arrays will be length 1 or more.

// #### Results

// common([1, 2, 3], [7, 3]) → True

// common([1, 2, 3], [7, 3, 2]) → False

// common([1, 2, 3], [1, 3]) → True

function common(a, b) {
    // first same ele      OR last same ele
    return (a[a.length-1] === b[b.length-1] || a[0] === b[0]);
}

//console.log(common([1, 2, 3], [1, 3]));





// ### [Challenge 8] Object Keys and Values

// 1.  Create an object with two key-value pairs.

// 2.  Log that object to the console.

// 3.  Delete the first key-value pair in the object.

// 4.  Log that object to the console again. The first key-value pair should be gone.

const obj = {
    key: "value",
    key2: "value2"
};

console.log(obj);

delete obj.key;

console.log(obj);



// ### [Challenge 9] Mutating Objects

// 1. Create an array of objects with at least 2 key value pairs. The objects should all have the same keys, and the array should contain at least 3 objects.

// 2. Create a function that accepts the array of objects as an argument.

// 3. Print the value of the second key in each object to the console. Use dot-notation to access the values.

// 4. After printing the values in step 3, change the values of the second key in every object to something new.

// 5. Prove the change worked by printing the second key in each object to the console, which should show the new value. Use bracket-notation to access the values this time.


let myFamily = [
    aaliyah = {
        age: 17,
        pet: "Lucy"
    },
    michael = {
        age: 14,
        pet: "Mocha"
    },
    lani = {
        age: 'ageless',
        pet: "Max"
    }
]
function mutateObjects(arrayOfObjects) {
    // iterate through objects in array
    for (let i = 0; i < arrayOfObjects.length; i++) {
        // print second key, which is pet since obj are not indexed
        console.log(arrayOfObjects[i].pet);
        arrayOfObjects[i]["pet"] = "The super awesome, " + arrayOfObjects[i].pet;
        console.log(arrayOfObjects[i]["pet"]);
    
    }
}
mutateObjects(myFamily);






// ### [Challenge 10] Determine Runtime Complexity

// At the top your document for each challenge, state the runtime complexity for that function.





// ### Check for Understanding

// - Demonstrate how to create a function in JavaScript.
// const thisIsAnAnonFunct = () => { code block };
// - Create 3 examples using Math().
let randomNumber = Math.random();
let roundedRandom = Math.round(Math.random());
let roundDownRandomUpTo5  = Math.floor(Math.random() * 5 + 1);
// - How does a function return output?
// with the return keyword
// - Demonstrate how to write a loop.
// do { something and iterator } while ( break condition)
// - Create an example object.
// let objectLiteral = { key: 14, key2: "I forgot my number", key3: "29"}