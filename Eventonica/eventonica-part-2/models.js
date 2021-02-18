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
    return Event.findByCategory(category);
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

  constructor(name, date, category) {
    this.id = Event._nextId++;
    this._name = name;
    this._date = date;
    this._category = category;
    console.log(this._date);
    // decide what properties are required
    Event.all.push(this); // keep track of all created instances
  }
  
  static findByDate() {
    
    return [];
  }

  static findByCategory(category) {
    let categoryArray = [];
    for (let i = 0; i < this.all.length; i++) {
      if(this.all[i].category === category) {
        categoryArray.push(this.all[i]);
      }
    }
    return categoryArray;
  }
}

class User {
  static all = [];
  static _nextId = 200;

  constructor(firstName, lastName, userName, email, dob) {
    this._id = User._nextId++;
    this._firstName = firstName;
    this._lastName = lastName;
    this._userName = userName;
    this._email = email;
    this._dob = dob;
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
