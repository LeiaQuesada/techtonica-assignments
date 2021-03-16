class Eventonica {
  addEvent(name, date, category) {
    new Event(name, date, category);
  }
  
  deleteEvent(id) {
    Event.all = Event.all.filter(event => event.id !== id);
  }

  findEventsByDate(date) {
    return Event.findByDate(date);
  }

  findEventsbyCategory() {
    return Event.findByCategory(category);
  }

  addUser(firstName, lastName, userName, email, dob) {
    new User(firstName, lastName, userName, email, dob);
  }

  deleteUser(id) {
    User.all = User.all.filter(user => user.id !== id);
  }
}

class Event {
  static all = [];
  static _nextId = 5432;

  constructor(name, date, category) {
    this.id = Event._nextId++;
    this.name = name;
    this.date = date;
    this.category = category;
    console.log(this.date);

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
