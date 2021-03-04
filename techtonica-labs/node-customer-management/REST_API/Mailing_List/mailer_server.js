const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;

// const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

//creates a list object
// let lists = new Map();

app.route('/lists').get((req, res) => {
  // creates existing list names
  const listsArray = Array.from(lists.keys()); 
  res.status(200).send(listsArray);
});

// add array objects to lists object
const lists = [
  { 
    "name": "staff",
    "members": 
      [
        "talea@techtonica.org", 
        "michelle@techtonica.org"
      ]
  },
  {
    "name1": "volunteers",
    "members1": 
      [
        "me@techtonica.org", 
        "you@techtonica.org"
      ]
  }
]