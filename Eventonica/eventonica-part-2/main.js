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
      .map((event) => `<li>${event.name}</li>`)
      .join("\n");
  };

  const addEventForm = document.querySelector("#add-event");

  // Handle add event form submit by calling our instance of Eventonica, `app`
  addEventForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const name = document.querySelector("#add-event-name").value;
    const event = app.addEvent(name);
    console.log("Added event", event);
    refreshEventsList();
    addEventForm.reset();
  });

  // Builds HTML list for all users. call this function after you
  // change, add, or remove any users?
  const refreshUsersList = () => {
    document.querySelector("#users-list").innerHTML = User.all
      .map((user) => `<li>${user.name}</li>`)
      .join("\n");
  };

  const addUserForm = document.querySelector("#add-user");

  // Handle add user form submit by calling our instance of Eventonica, `app`
  addUserForm.addEventListener("submit", (submitUser) => {
    submitUser.preventDefault();
    const name = document.querySelector("#add-user-name").value;
    const user = app.addUser(name);
    console.log("Added user", user);
    refreshUsersList();
    addUserForm.reset();
  });
});