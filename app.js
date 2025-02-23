const express = require('express');
const fs = require('fs');
const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    // 2. based on JSEND json formatting standard
    status: 'success',
    results: tours.length,
    // 3. envelope for our data
    data: {
      tours,
    },
  });
}); // 1. this (req,res) => {} is called "route handler"

// express is a function which upon calling adds a bunch of methods to app
// first one we are calling is listen:
// we usually put app.listen at the end

const port = 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// now we need to define routes which is very simple in express
// app.get('/', (req, res) => {
//     res.status(200).send('Hello from the server side!');
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint!');
// });
