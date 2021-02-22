/**
 * Add all your DOM event handlers and other UI code in this file.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Use this to call all the logic we already created
  const app = new Eventonica();

  function editEvent(eventId) {
    // look through event.all array, only need one event - use .find()
    let event = Event.all.find(event => event.id === eventId)
    // display the initially hidden edit field
    let container = document.querySelector("#edit-event-container");
    container.style.display = "inline";
    // populate all fields with object's properties
    document.querySelector("#edit-event-name").value = event.name;
    document.querySelector("#edit-event-category").value = event.category;
    document.querySelector("#edit-event-date").value = event.date;

    document.querySelector("#edit-event").addEventListener("submit", (submitEvent) => {
      event.name = document.querySelector("#edit-event-name").value;
      event.date = document.querySelector("#edit-event-date").value;
      event.category = document.querySelector("#edit-event-category").value;
      // console.log("Added event", event);
      refreshEventsList();
      container.style.display = "none";
  
    })

  }

  // Builds HTML list items for all event entries. You must call this function after you make changes
  const refreshEventsList = () => {
    document.querySelector("#events-list").innerHTML = Event.all
      .map((event) => `<li>${event.id}: ${event.name} of ${event.category} on ${event.date} <button class="update-event" id="${event.id}">Edit</button></li>`)
      .join("\n");
    // update event
    const updateEventButtons = document.querySelectorAll(".update-event");

    console.log(updateEventButtons);
    for (let i = 0; i < updateEventButtons.length; i++) {
      // onclick, find which event id
      updateEventButtons[i].addEventListener("click", (event) => {
        
        let eventId = parseInt(event.target.id);
        // updateEvent.preventDefault(); 
        editEvent(eventId);
      });      
    }
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

  // Builds HTML list items for all user entries. You must call this function after you make changes
  const refreshUsersList = () => {
    document.querySelector("#users-list").innerHTML = User.all
      .map((user) => `<li>User: ${user.id}: ${user.userName} <button class="update-user" id="${user.id}">Edit</button></li>`)
      .join("\n");    
      // update user
      const updateUserButtons = document.querySelectorAll(".update-user");
      for (let i = 0; i < updateUserButtons.length; i++) {
        // onclick, find which event id
        updateUserButtons[i].addEventListener("click", (user) => {
          
          let userId = parseInt(user.target.id);
          // updateEvent.preventDefault(); 
          app.updateUser(userId);
        });      
      }
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