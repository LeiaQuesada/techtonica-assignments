/**
 * Paste your code from Part 1 into this file but keep the module check at the very end.
 * (The following is a just a small subset for the Add Event form on the example page to work)
 */
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
    //   // remove entire element
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
  // static is a way to include data that is shared across all instances of your class
  static all = [];
  static _nextId = 100;

  constructor() {
    this.id = Event._nextId++;
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

  constructor() {
    this.id = User._nextId++;
    this._name = name;
    // decide what properties are required on an instance
    User.all.push(this); // keep track of all created instances
  }

  // createFavorite() {
  //   //
  // }
}

if (typeof module !== "undefined") {
  module.exports = { Eventonica, User, Event };
}

new Event('Example event');
new User('Alex');
