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
    // add function that will create ticket type for the event taking 2 params, name of the ticket type and the price of the ticket
    addAvailableTickets(type, price) {
      // use Event's property to store ticket types for the event
      this.type = type;
      this.price = price;
      let types = {};
      types[this.type] = this.price;
      this.availableTickets.push(types);
      return this.availableTickets;
    }
    allTickets() {
      this.addAvailableTickets.types;
      let str = "All tickets: ";
      let count = 1;
      for (let element in types) {
        str += `${count}. ${types[element][this.type]} (${types[this.price]}) `;
        count++;
      }
      console.log(str);
      return str;
    }
}

// create a class to give events ability to have different ticket types with different prices
class TicketType {
    constructor(name, price) {
      this.name = name;
      this.price = price;
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
// eventArray.push(eventObj1);

// pushes multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

// in order to check whether the elements are pushed, use console.log
// console.log(eventArray);

// add different types to every single one of your events. Here are some more examples for how it will be called
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);

eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);

console.log(eventObj1.availableTickets);

//  jQuery code to iterate through it in the same js file
// Note that all jQuery methods in our examples are inside a document ready event. This is to prevent any jQuery code from running before the document is finished loading (is ready).
$(document).ready(function () {
  // .html() is used to return the HTML code from jQuery to the target element of the HTML page. event is the target element in the below code.
  let html = '';
  // .each() is used to iterate through the array of objects.
  $.each(eventArray, function (index, item) {
    html += `<li>${item.name} - ${item.description}</li>`;
  });
  // insert final html into #event...
  $('#event').html(html);
});