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