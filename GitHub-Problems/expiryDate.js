// The fridge at Indeed is getting stinky with old leftovers. Write a function to check each item in the fridge. The items look like this:
//
// ```
// {
//   name: "Soy milk",
//   expiryDate: "2020-01-02"
// }
// ```
//
// Write a function `cleanOutFridge` that takes an **array** of fridge items. Print out the age of each item in the fridge relative to today's date.
//
// Example
//
// ```
// The 'Soy milk' is 19 days beyond its expiry date.
// ```
//
// In addition, from the function return an array containing the names of any items that are greater than 7 days past their expiry date and should be discarded.
//
// Example
//
// // ```
// let items = [
//   { name: 'Soy milk', expiryDate: '2021-01-01' },
//
//   { name: 'Sirloin', expiryDate: '2021-01-05' },
//
//   { name: 'Chewy lentils', expiryDate: '2021-02-28' }
//
// ];

// cleanOutFridge(items);
//
// // returns:
//
// // ['Soy milk', 'Sirloin']



function cleanOutFridge(array){
    //Print out the age of each item in the fridge relative to today's date.
    // The 'Soy milk' is 19 days beyond its expiry date.
    // return an array containing the names of any items that are greater than 7 days past their expiry date and should be discarded.
    
  
    // set return array
    let expired = [];
    // set variable for today's date
    let currentDate = new Date();
    // loop through each object in array 
    for (let product in array) {
          let fixDate = array[product]["expiryDate"].split("-");
          //console.log(fixDate);
          let expiryDate = [fixDate[1], fixDate[2], fixDate[0]].join(', ');
          // convert date format 
          let expiresOn = new Date(expiryDate)
          // calculate the difference betwen the two dates
          let timeDiff = currentDate.getTime() - expiresOn.getTime();
          // convert time diff to days
          let daysPastDue = timeDiff / (1000 * 60 * 60 * 24);
          // if expiry date is less than current date
          if ( daysPastDue >= 7 ) {
            // print out age of each item in the fridge
            // we should round the value after condition check
            daysPastDue = Math.round(daysPastDue);
            console.log(`The ${array[product]["name"]} is ${daysPastDue} days past beyond its expiry date.`);
            expired.push(array[product]["name"]);
          }
        // }
      }
      return expired;
  }  
  
  let items = [
    { name: 'Soy milk', expiryDate: '2021-01-01' },
  
    { name: 'Sirloin', expiryDate: '2021-01-05' },
  
    { name: 'Chewy lentils', expiryDate: '2021-02-28' }
  
  ];
  
  cleanOutFridge(items);
  