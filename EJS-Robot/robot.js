/*    CHAPTER 7 OF ELOQUENT JAVASCRIPT
Our robot will be moving around the village. There are parcels in various places, each addressed to some other place. The robot picks up parcels when it comes to them and delivers them when it arrives at their destinations.
The automaton must decide, at each point, where to go next. It has finished its task when all parcels have been delivered.
To be able to simulate this process, we must define a virtual world that can describe it. This model tells us where the robot is and where the parcels are. When the robot has decided to move somewhere, we need to update the model to reflect the new situation.
*/

// Given an array of edges, buildGraph 
function buildGraph(edges) {
  // create a map object that, for each node, stores an array of connected nodes.
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  // split method to go from the road strings, which have the form "Start-End", to two-element arrays containing the start and end as separate strings.
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  console.log(graph);
  return graph;
}

const roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin",
  "Alice's House-Post Office", "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop", "Marketplace-Farm",
  "Marketplace-Post Office", "Marketplace-Shop",
  "Marketplace-Town Hall", "Shop-Town Hall"
];

const roadGraph = buildGraph(roads);

// condense the village’s state down to the minimal set of values that define it. There’s the robot’s current location and the collection of unde- livered parcels, each of which has a current location and a destination address. make it so that we don’t change this state when the robot moves but rather compute a new state for the situation after the move.
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  // check whether there is a road going from the current place to the destination, and if not, it returns the old state since this is not a valid move.
  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
      // create a new state with the destination as the robot’s new place. 
    } else {
      // create a new set of parcels—parcels that the robot is carrying (that are at the robot’s current place) need to be moved along to the new place.
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        // parcels need to be removed from the set of undelivered parcels. The call to map takes care of the moving, and the call to filter does the delivering.
        return { place: destination, address: p.address };
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}


let first = new VillageState(
  "Post Office",
  [{ place: "Post Office", address: "Alice's House" }]
);
let next = first.move("Alice's House");
console.log(next.place); // → Alice's House console.log(next.parcels); // → [] console.log(first.place); // → Post Office

// function that takes a VillageState object and returns the name of a nearby place. robot returns is object containing both the direction it wants to move in and a memory value that will be given back to it the next time it is called
function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

//RANDOM ROBOT EXAMPLE
// example of undesired functionally inefficient code, randomizes direction of every turn
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

// create a new state with some parcels. A static method (written here by directly adding a property to the constructor) is a good place to put that functionality. do loop keeps picking new places when it gets one that’s equal to the address
VillageState.random = function (parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};

// Let’s start up a virtual world.
runRobot(VillageState.random(), randomRobot); // → Moved to Marketplace
// → Moved to Town Hall
// →...
// → Done in 63 turns

// EXAMPLE OF A FIXED ROUTE INTELLIGENT BEHAVIOR
const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House", "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm", "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}
// COMPLETES ROUTE IN MAX OF 26 TURNS

// BETTER TECHNIQUE IS TO FIND SHORTEST ROUTE FROM A - B
function findRoute(graph, from, to) {
  // KEEP A WORK LIST, PLACES THAT SHOULD BE EXPLORED NEXT
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      //  If place is the goal, a finished route can be returned.
      if (place == to) return route.concat(place);
      // if we haven’t looked at this place before, a new item is added to the list.
      if (!work.some(w => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

// This robot uses its memory value as a list of directions to move in, just like the route-following robot. Whenever that list is empty, it has to figure out what to do next. It takes the first undelivered parcel in the set and, if that parcel hasn’t been picked up yet, plots a route toward it. If the parcel has been picked up, it still needs to be delivered, so the robot creates a route toward the delivery address instead.
function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

/* Write a function compareRobots that takes two robots (and their starting memory). It should generate 100 tasks and let each of the robots solve each of these tasks. When done, it should output the average number of steps each robot took per task.
For the sake of fairness, make sure you give each task to both robots, rather than generating different tasks per robot.
Robot efficiency
Can you write a robot that finishes the delivery task faster than goalOrientedRobot ? If you observe that robot’s behavior, what obviously stupid things does it do? How could those be improved?
If you solved the previous exercise, you might want to use your compareRobots function to verify whether you improved the robot.

Write a new class PGroup, similar to the Group class from Chapter 6, which stores a set of values. Like Group, it has add, delete, and has methods.
Its add method, however, should return a new PGroup instance with the given member added and leave the old one unchanged. Similarly, delete creates a new instance without a given member.
The class should work for values of any type, not just strings. It does not have to be efficient when used with large amounts of values.
The constructor shouldn’t be part of the class’s interface (though you’ll def- initely want to use it internally). Instead, there is an empty instance, PGroup. empty, that can be used as a starting value.
Why do you need only one PGroup.empty value, rather than having a function that creates a new, empty map every time?
*/