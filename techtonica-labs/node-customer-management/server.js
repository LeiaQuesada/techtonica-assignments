const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { PORT, I_LOVE } = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server running on port ${port}...`);
});

console.log("I love ", I_LOVE);

app.route('/customers')
  .get((req, res) => {
    res.status(200).send(customers);
  })  // POST in the /customers route
  .post((req, res) => {
    /*
    * We are assuming here that an entire customer object is sent through the body
    * For a more robust API, you should implement a check here
    */
    let newCustomer = req.body;
    customers.push(newCustomer);
    /*
    * Here, we choose to return the customer object, but you could respond with anything such as a
    * generic message, etc.
    * When testing, you could console.log the complete customers array to see the added customer.
    */
    res.status(200).send(newCustomer);
  });

app.route('/customers/:id')
  .get((req, res) => {
    let customer_id = req.params.id;
    let status = 400;
    let response = 'Unable to fetch data!';
    customers.forEach((customer) => {
      if (customer['id'] == customer_id) {
        res.status(200).send(customer);
      }
    });
    res.status(status).send(response);
  })
  .put((req, res) => {
    let customer_id = req.params.id;
    let status = 400;
    let response = "Unable to fetch data!";
    let propertiesToChange = req.body;
    let updatedCustomer = {};
    customers.forEach((customer) => {
      updatedCustomer = {
        ...customer,
        ...propertiesToChange
      }
    }
    )
    status = 200;
    response = updatedCustomer;
    res.status(status).send(response);
  })
  .delete((req, res) => {
    let customer_id = req.params.id;
    let status = 400;
    let response = "Unable to fetch data!";
    let newCustomers = customers.filter((customer) => {
        return customer;
      }
    )
    status = 200;
    response = newCustomers;
    res.status(status).send(response);
  })
;

app.route('/invoices')
  .get((req, res) => {
    res.status(200).send(invoices);
  })
  .post((req, res) => {
    let newInvoice = req.body;
    invoices.push(newInvoice);
    res.status(200).send(invoices);
  });

app.route('/invoices/:id')
  .get((req, res) => {
    let invoice_id = req.params.id;
    let status = 400;
    let response = 'Unable to fetch data!';
    invoices.forEach((invoice) => {
      if (invoice['id'] == invoice_id) {
        res.status(200).send(invoice);
      }
    });
    res.status(status).send(response);
  })
  .put((req, res) => {
    let invoice_id = req.params.id;
    let status = 400;
    let response = "Unable to fetch data!";
    let newInvoice = {}
    invoices.forEach((invoice) => {
      newInvoice = req.body;
    })
    status = 200;
    response = newInvoice;
    res.status(status).send(response);
  });



let customers = [
  {
    id: 1,
    first_name: 'Fremont',
    last_name: 'Broader',
    email: 'fbroader0@bloglines.com',
    gender: 'Male',
    ip_address: '23.27.246.1'
  },
  {
    id: 2,
    first_name: 'Georgetta',
    last_name: 'Blamey',
    email: 'gblamey1@wisc.edu',
    gender: 'Female',
    ip_address: '17.110.6.159'
  },
  {
    id: 3,
    first_name: 'Meghann',
    last_name: 'Quillinane',
    email: 'mquillinane2@surveymonkey.com',
    gender: 'Female',
    ip_address: '237.88.226.148'
  },
  {
    id: 4,
    first_name: 'Kerby',
    last_name: 'Mate',
    email: 'kmate3@si.edu',
    gender: 'Male',
    ip_address: '81.44.87.187'
  },
  {
    id: 5,
    first_name: 'Loren',
    last_name: 'Brabon',
    email: 'lbrabon4@umich.edu',
    gender: 'Female',
    ip_address: '47.137.187.14'
  }
];

let invoices = [
  {
    id: 6,
    product: 'Island Oasis - Ice Cream Mix',
    price: '$0.78',
    currency: 'BRL',
    quantity: 17,
    type: 'Restaurants'
  },
  {
    id: 7,
    product: 'Ice Cream - Turtles Stick Bar',
    price: '$9.23',
    currency: 'EUR',
    quantity: 9,
    type: 'Marine Transportation'
  },
  {
    id: 8,
    product: 'Shrimp - Black Tiger 8 - 12',
    price: '$2.50',
    currency: 'COP',
    quantity: 20,
    type: 'Computer Communications Equipment'
  },
  {
    id: 9,
    product: 'Wine - Blue Nun Qualitatswein',
    price: '$8.52',
    currency: 'IDR',
    quantity: 64,
    type: 'Packaged Foods'
  },
  {
    id: 10,
    product: 'Truffle Shells - White Chocolate',
    price: '$7.51',
    currency: 'EUR',
    quantity: 65,
    type: 'Industrial Specialties'
  }
];