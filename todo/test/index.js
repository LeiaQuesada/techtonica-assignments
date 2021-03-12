// Load the Node Postgresql Library so we can interact with our
// PostgreSQL Database
const pg = require('pg')

// ---- Setup database connection
const dbHost = 'echo.db.elephantsql.com:5432'
const dbUsername = 'ediwaecd'
const dbPassword = '8U-HcqbYWc_ASy2cKhRzB-_U7sIr6Tg2'
// for the free tier on elephantsql the db name and username are the same
const dbName = dbUsername

const dbConnString = `postgres://${dbUsername}:${dbPassword}@${dbHost}/${dbName}`

// Create a global pool of postgresql connections
const dbPool = new pg.Pool({ connectionString: dbConnString })

// Register a callback function to log errors and
// terminate the web server process if postgresql 
// has a problem
dbPool.on('error', (err, client) => {
  console.error('Unexpected error on client', err)
  process.exit(-1)
})

// Retrieve all todos as database records from postgresql and
// provide them to the passed in callback function
function getTodos(callbackFn) {
  return dbPool.query('SELECT id, entry FROM todo_items', callbackFn)
}

// Save a todo to the postgresql database, and provide the
// resulting database record to a callback function
function saveTodo(todo, callbackFn) {
  return dbPool.query(
    'INSERT INTO todo_items (entry) VALUES($1)',
    [todo],
    callbackFn)
}

// Load the express library so we can make our
// app available via the Internet
const express = require('express')
// Initialize an express application
const app = express()

// Use the body-parser express middleware so we can
// use data encoded as JSON and POSTed to the server
// in a request body
const bodyParser = require('body-parser')
app.use(bodyParser.json())



// Register a route for GET requests to ‘/‘ 
// that loads all the todos and shows 
// them to the user.
app.get('/items', (req, res) => {
  getTodos((err, todoResult) => {
    if (err) {
      res.status(503).send('<b>Error getting TODO list</b>')
      return
    }

    let items = ''
    todoResult.rows.forEach(row => items += `<li>${row.entry}</li>`)
    res.send(`<b>TODO list:</b><br/><ul>${items}</ul>`)
  })
})


// Register a route to handle POST requests to ‘/‘
// It creates a TODO in the database and 
// redirects users
app.post('/', (req, res) => {
  if (!req.body || !req.body.todo) {
    res.status(400).send('Expected TODO item')
    return
  }

  saveTodo(req.body.todo, (err, dbRes) => {
    if (err) {
      res.status(503).send(`Unable to save new TODO item: ${req.body.todo}`)
      return
    }
    res.redirect('/')
  })
})

// Register a route to handle GET requests to ’/’
// that loads TODO’s from the database and exposes them 
// to the user as JSON
app.get('/', (req, res) => {
  getTodos((err, todoResult) => {
    const hasError = !!err
    const result = {
      error: hasError,
      // if we got a DB error return no data to avoid inconsistent results
      todo: hasError ? [] : todoResult.rows,
    }

    const respCode = hasError ? 503 : 200
    res.status(respCode).send(JSON.stringify(result))
  })
})

// Configure our application to listen to requests on port 3000.
// Register a callback so that once the server starts it logs that
// it’s ready and listening.
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))