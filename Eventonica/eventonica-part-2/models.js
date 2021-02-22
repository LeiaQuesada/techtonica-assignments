class Eventonica {
  addEvent(name, date, category) {
    // Adds a new Event
    new Event(name, date, category);
  }

  updateEvent(eventId) {
    // "update-event-${event.id}"
    // look through event.all array
    Event.all.filter(event => event.id === eventId);
  }

  deleteEvent(id) {
    Event.all = Event.all.filter(event => event.id !== id); //thanks Alex!
  }

  findEventsByDate(date) {
    // Return items in Event.all with a specified date
    return Event.findByDate(date);
  }

  findEventsbyCategory() {
    // Return items in Event.findByCategory() with a specified category
    return Event.findByCategory(category);
  }

  addUser(firstName, lastName, userName, email, dob) {
    // Adds a new User
    new User(firstName, lastName, userName, email, dob);
  }

  updateUser(userId) {
    // Update existing User
    User.all.filter(user => user.id === userId);
  }

  deleteUser(id) {
    // Deletes User
    User.all = User.all.filter(user => user.id !== id);
  }
}

class Event {
  // static is a way to include data that is shared across all instances of your class, aka shared
  static all = [];
  static _nextId = 5432;

  constructor(name, date, category) {
    this.id = Event._nextId++;
    this.name = name;
    this.date = date;
    this.category = category;
    console.log(this.date);
    // decide what properties are required
    Event.all.push(this); // keep track of all created instances
    console.log(this);
  }
  
  static findByCategory(category) {
    let categoryArray = Event.all.filter(event => event.category === category);
    return categoryArray;
  }
}

class User {
  static all = [];
  static _nextId = 100;
  static favorite = [];

  constructor(firstName, lastName, userName, email) {
    this.id = User._nextId++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    // this.favorite = [];
    // decide what properties are required on an instance
    User.all.push(this); // keep track of all created instances
  }
}

const party = new Event("Event Name", "2021-02-14", "Event Category");
const leia =  new User("firstName", "lastName", "userName", "email"); 

if (typeof module !== "undefined") {
  module.exports = { Eventonica, User, Event };
}
