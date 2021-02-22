/**
 * Add all your DOM event handlers and other UI code in this file.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Use this to call all the logic we already created
  const app = new Eventonica();

  // Builds HTML list for all event. You must call this function after you
  // change, add, or remove any events.
  const refreshEventsList = () => {
    document.querySelector("#events-list").innerHTML = Event.all
      .map((event) => `<li>${event.id}: ${event.name} of ${event.category} on ${event.date} </li>`)
      .join("\n");
  };

  // Handle add event form submit
  const addEventForm = document.querySelector("#add-event");
  addEventForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();   // still don't understand what this does
    //capture input values and store in appropriate variables
    const name = document.querySelector("#add-event-name").value;
    const date = document.querySelector("#add-event-date").value;
    const category = document.querySelector("#add-event-category").value;
    // store event properties in event object
    const event = app.addEvent(name, date, category);
    // console.log("Added event", event);
    refreshEventsList();
    // addEventForm.reset();
  });

  // update event  

  // delete event
  const deleteEventForm = document.querySelector("#delete-event");
  deleteEventForm.addEventListener("submit", (deleteEvent) => {
    deleteEvent.preventDefault(); 
    // need to turn value into integer not string
    const eventToBeRemoved = parseInt(document.querySelector("#delete-event-id").value);
    app.deleteEvent(eventToBeRemoved);
    refreshEventsList();
    deleteEventForm.reset();
  });

  const searchByDateForm = document.querySelector("#search");
  searchByDateForm.addEventListener("submit", (date) => {
    date.preventDefault();
    const matchingDate = document.querySelector("#date-search").value;
    let filteredByDate = Event.all.filter(event => event.date === matchingDate);
    document.querySelector("#search-list").innerHTML = filteredByDate
      .map((event) => `<li>${event.id}: ${event.name} of ${event.category} on ${event.date} </li>`)
      .join("\n");
    // searchByDateForm.reset();
    // console.log("filteredByDate: ", filteredByDate, matchingDate);
  });

  // find events by category
  const searchByCategoryForm = document.querySelector("#search");
  searchByCategoryForm.addEventListener("submit", (category) => {
    category.preventDefault();
    const matchingCategory = document.querySelector("#category-search").value;
    let filteredByCategory = Event.all.filter(event => event.category === matchingCategory);
    document.querySelector("#search-list").innerHTML = filteredByCategory
      .map((event) => `<li>${event.id}: ${event.name} of ${event.category} on ${event.date} </li>`)
      .join("\n");
  });

  // Builds HTML list for all users
  const refreshUsersList = () => {
    document.querySelector("#users-list").innerHTML = User.all
      .map((user) => `<li>User: ${user.id}: ${user.userName}</li><`)
      .join("\n");
  };

  // Handle add user form submit
  const addUserForm = document.querySelector("#add-user");
  addUserForm.addEventListener("submit", (submitUser) => {
    submitUser.preventDefault();
    const firstName = document.querySelector("#add-user-first-name").value;
    const lastName = document.querySelector("#add-user-last-name").value;
    const userName = document.querySelector("#add-user-name").value;
    const email = document.querySelector("#add-user-email").value;
    const user = app.addUser(firstName, lastName, userName, email);
    refreshUsersList();
    addUserForm.reset();
  });

  // update user

  // delete user
  const deleteUserForm = document.querySelector("#delete-user");
  deleteUserForm.addEventListener("submit", (deleteUser) => {
    deleteUser.preventDefault(); 
    // need to turn value into integer not string
    const userToBeRemoved = parseInt(document.querySelector("#delete-user-id").value);
    const removeUser = app.deleteUser(userToBeRemoved);
    refreshUsersList();
    deleteUserForm.reset();
  });

});