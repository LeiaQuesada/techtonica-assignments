const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

app.get('/lists', (req, res) => {
  const listsArray = Array.from(lists.keys());
  res.send(listsArray);
});

app.get('/lists/:name', (req, res) => {
  let list_name = req.params.name;
  let status = 400;
  let response = "Unable to fetch data!";
  lists.forEach((list) => {
      if (list["name"] == list_name) {
          res.status(200).send(list);
      }
  });
  res.status(status).send(response);
});

app.delete('/lists/:name', (req, res) => {
  let list_name = req.params.name;
  let status = 400;
  let response = "Unable to fetch data!";
  let newLists = lists.filter((list) => {
      return list;
  });

  status = 200;
  response = newLists;
  res.status(status).send(response);
});

app.put('/lists/:name', (req, res) => {
  let list_name = req.params.name;
  let status = 400;
  let response = "Unable to fetch data!";
  let newList = {};
  lists.forEach((list) => {
      newList = req.body;
  });

  status = 200;
  response = newList;
  res.status(status).send(response);
});


// new instance of Map object to allow us to retrieve object name, keys and values
const lists = new Map();

let staffList = { 
  "name": "staff", 
  "members": 
    [
      "talea@techtonica.org", 
      "michelle@techtonica.org"
    ]
};

var apprenticeList = {
  name: "apprentices",
  members: 
    [
      "me@gmail.com", 
      "you@gmail.com"
    ]
};

lists.set(`${staffList.name}`, staffList);
lists.set(`${apprenticeList.name}`, apprenticeList);