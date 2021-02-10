/* 

Objectives
Use the new JS object-oriented programming skills to create an "Event" class.
Write functions on the "Event" class that will:
allow the event host to add tickets with prices and "ticket type" (e.g. regular, VIP, mezzanine, balcony, etc)
allows a user to input a price range they are willing to pay to see what ticket types are available to them
Create a few event objects
Push the event objects into an array and use jQuery to display the list of events to an html page.

Specific Things to Learn
Creating event array.
Iterating through the array.
Displaying array items in HTML page.

*/

class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }
}

// The below statement creates an object.
const eventObj1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);

// instantiate new objects
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

// creates an empty Event array
const eventArray = new Array();

// pushes single object to an array
eventArray.push(eventObj1);

// pushes multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

// in order to check whether the elements are pushed, use console.log
console.log(eventArray);

//  jQuery code to iterate through it in the same js file
// .each() is used to iterate through the array of objects. Above code represents the syntax to iterate using .each()
// .html() is used to return the HTML code from jQuery to the target element of the HTML page.
// event is the target element in the below code.
// Note that all jQuery methods in our examples are inside a document ready event. This is to prevent any jQuery code from running before the document is finished loading (is ready).
$(document).ready(function () {
  let html = '';
  $.each(eventArray, function (index, item) {
    html += `<li>${item.name} - ${item.description}</li>`;
  });
  // insert final html into #event...
  $('#event').html(html);
});

