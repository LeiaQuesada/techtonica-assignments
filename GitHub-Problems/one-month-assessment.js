/**
 * Part 1 - Code Exercises
 * 5 questions + 1 bonus (~1 hour)
 * 44 points
 * 
 * Note: You are **encouraged** to run this code in your editor or using node.
 * But do not use a browser console.
 * 
 * These are approximately ordered from least complicated to most complicated
 * so you may not finish the entire section. Follow the 1 hour guideline
 * and move on to the other sections and come back if you have time.
 * 
 */


// Q. 1( 3 points)
// Write a function checkForAllergen that takes in one string parameter called ingredient. 
// The function should do the following:
// If ingredient is "milk", "egg", "shellfish" or "tree nuts", return “Definite allergen”
// If ingredient is "sesame", "sulphites" or "soybean", return "Mild allergen”
// If ingredient is "wheat", return “Possible allergen”
// For any other ingredient, return “Not an allergen”
//

function checkForAllergen(ingredient) {
    switch (ingredient) {
        case "milk":
        case "egg":
        case "shellfish":
        case "tree nuts":
            return "Definite allergen";
        case "sesame":
        case "sulphites":
        case "soybean":
            return "Mild allergen";
        case "wheat":
            return "Possible allergen";
        default:
            return "Not an allergen";

    }
}
// Then write some function calls you would use to test this function.
console.log(checkForAllergen("typo"));
console.log(checkForAllergen("tree nuts"));
console.log(checkForAllergen("sesame"));
console.log(checkForAllergen("wheat"));

// Q. 2( 5 points)
// Write a for loop that prints "99 bottles of beer on the wall, 99 bottles of beer, you take one down, pass it around, 98 bottles of beer on the wall", counts down to 0 and ends with "no more bottles of beer on the wall." 
// e.g.
// "99 bottles of beer on the wall, 99 bottles of beer, you take one down, pass it around, 98 bottles of beer on the wall."
// "98 bottles of beer on the wall, 98 bottles of beer, you take one down, pass it around, 97 bottles of beer on the wall."
// ...
// "1 bottle of beer on the wall, 1 bottle of beer, you take one down, pass it around, no more bottles of beer on the wall."
function bottlesOfBeer() {
    for (let i = 99; i >= 0; i--) {
        // 0 "no more bottles of beer on the wall"
        if (i === 0) {
            console.log ("no more bottles of beer on the wall.");
            // 2 bottles, has 1 not plural at the end of string
        }   else if (i === 2) {
            console.log("2 bottles of beer on the wall, 2 bottles of beer, you take one down, you pass it around, 1 more bottle of beer on the wall.");
            // 1 bottle doesn't have multiple
        }   else if (i === 1) {
            console.log("1 bottle of beer on the wall, 1 bottle of beer, you take one down, pass it around, no more bottles of beer on the wall.");
            // loop from 99 to 2
        }   else if (i > 1) {
            console.log(`${i} bottles of beer on the wall, ${i} bottles of beer, you take one down, pass it around, ${i - 1} bottles of beer on the wall.`);
        }
    }
}

bottlesOfBeer();

// Q. 3( 5 points)
// Assign a new object to a variable named `chef` that contains 3 properties:
//
// 1. restaurant (string)
// 2. cuisineType (string)
// 3. dateHired (Date object)
//
const chef = {
    restaurant: "Delish Dish",
    cuisineType: "Italiano",
    dateHired: new Date("January 1, 2000 03:24:00")
}

/**
 * Some notes from the MDN page that might help
 * since you can't look anything up
 * 
today = new Date();
dateHired = new Date('December 17, 1995 03:24:00');
elapsed = end.getTime() // time in milliseconds

*/


// Q. 3a -(.5 points)
// Print out the cuisineType value
console.log(chef.cuisineType);

// Q. 3b( 2 points)
// Add two new properties to the same instance of the object assigned above.
// 1. `michelinStars` should be a numeric value
// 2. `appearedOnTV` should be a boolean
chef.michelinStars = 4;
chef.appearedOnTV = true;
// console.log(chef.michelinStars, chef.appearedOnTV);

// Q. 3c( 3 points)
// Create a function `calculateTimeAtThisRestaurant` that accepts a parameter of the chef object
// defined above and returns the length of time that chef has been working in years relative to today.
//
// if chef.dateHired = Date object for January 1, 2000
// calculateTimeAtThisRestaurant(chef) should return 21
function calculateTimeAtThisRestaurant(obj) {
    let today = new Date().getTime();
    let hired = (obj.dateHired).getTime();
    let diffInYears = (today - hired) / 1000;
    diffInYears /= (60 * 60 * 24);
   return Math.round(diffInYears/365);
}
// console.log(calculateTimeAtThisRestaurant(chef));




// Q. 4 (10 points)
// We want to build a LivingBeing class.

class LivingBeing {
    // // constructor that takes an alive starting value (if not specified it should be true)
    // default values are declared before constructor method and passed in as constructor params
    // check how to declare default values
    // constructor(alive = true) {
    //     this.alive = alive;
    // }

    // // setAliveStatus method - must return nothing
    // set setAliveStatus() {
        
    // }
    // // getAliveStatus method
    // get getAliveStatus() {

    // }
    // // bonus: make the value fully private to this object LOOK UP "#privateField"

}


/**
 * Q. 5 (15 points)
 * 
 * Write a function called `scaleRecipe` that takes two arguments
 * arg 1 - an array of "ingredient" objects containing a list of ingredients and their quantities
 * arg 2 - number by which to multiply quantity in each object
 * 
 * returns:
 * a new array containing the list of ingredients with the quantities multiplied by
 * the number specified by the second argument
 * 
 * e.g.* 
 * var ingredients = [
 *   { item: "tea",  unit: "cup", quantity: 1},
 *   { item: "honey",  unit: "tbsp", quantity: 2},
 *   { item: "lemon",  unit: "juice of", quantity: 1},
 *   { item: "grated ginger",  unit: "tsp", quantity: 1}
 * ];
 * scaleRecipe(ingredients, 2)
 * => [
 *   { item: "tea",  unit: "cup", quantity: 2},
 *   { item: "honey",  unit: "tbsp", quantity: 4},
 *   { item: "lemon",  unit: "juice of", quantity: 2},
 *   { item: "grated ginger",  unit: "tsp", quantity: 2}
 * ];
 * 
 */ 
 
function scaleRecipe(arg1, arg2) {
    const newArray = arg1.map(obj => ({...obj}));
    // iterate through array
    for (let element in newArray) {
        // access object property        
        newArray[element]["quantity"] *= arg2;   
    }
    return newArray;
}
console.log(scaleRecipe([
      { item: "tea",  unit: "cup", quantity: 1},
      { item: "honey",  unit: "tbsp", quantity: 2},
      { item: "lemon",  unit: "juice of", quantity: 1},
      { item: "grated ginger",  unit: "tsp", quantity: 1}
    ], 2));




// Bonus Question: I’m sleep deprived and my brain is only capturing every third word in any conversation.

// Write a function called misunderstand that takes the following conversation as input and returns what my brain actually hears.
function misunderstand(str) {
    let words = str.split(" ");
    let heard = [];
    // every 3rd index position (3rd = 2nd index)
    for (let i = 2; i < words.length; i += 3) {
        heard.push(words[i]);
    }
    return heard.join(" ");
}

console.log(misunderstand("I remember Yiexia said she’s broke. I see the upstairs neighbor’s dog dragging paintbrushes back and forth, so that’s why Juan says he can see there’s paint all over it."));
// let theConversation = "I remember Yiexia said she’s broke. I see the upstairs neighbor’s dog dragging paintbrushes back and forth, so that’s why Juan says he can see there’s paint all over it."

// Great job you made it through the toughest part of the exam!!
// 😅

// End of JavaScript Part 1
// Go back to README for further instructions