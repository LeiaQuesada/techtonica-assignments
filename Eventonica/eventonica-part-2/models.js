class Eventonica {
  addEvent(/* arguments you decide go here */) {
    // Adds a new Event
    
  }

  updateEvent() {
    // Update existing Event
  }

  deleteEvent(id) {
    // Deletes Event
    // look through array of Events
    // for (let element in Event.all) {
    //   // if id matches event element's id
    //   // remove entire element with .removeChild() ?
    // }
    Event.all = Event.all.filter(event => event.id !== id); //thanks Alex!
    
    localStorage.removeItem(this.id);
  }

  findEventsByDate() {
    // Return items in Event.all with a specified date
  }

  findEventsbyCategory() {
    // Return items in Event.all with a specified category
  }

  addUser() {
    // Adds a new User
  }

  updateUser() {
    // Update existing User
  }

  deleteUser() {
    // Deletes User
  }
}

class Event {
  // static is a way to include data that is shared across all instances of your class, aka shared
  static all = [];
  static _nextId = 100;

  constructor(name, date) {
    this.id = Event._nextId++;
    this.name = name;
    this.date = date;
    console.log(this.date);
    // decide what properties are required
    Event.all.push(this); // keep track of all created instances
  }

  
  static findByDate() {
    return [];
  }

  static findByCategory() {
    return [];
  }
}

class User {
  static all = [];
  static _nextId = 200;

  constructor(name) {
    this.id = User._nextId++;
    this.name = name;
    // decide what properties are required on an instance
    User.all.push(this); // keep track of all created instances
  }

  // favoriteEvent() {
  //   //
  // }
}

if (typeof module !== "undefined") {
  module.exports = { Eventonica, User, Event };
}

new Event('Example event');
new User('Alex');
