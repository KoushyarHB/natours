const express = require('express');
const fs = require('fs');
const app = express();

// the request data for posts is not readily available in express and we need a middleware to access the data that is coming from client. the following in one such middleware:
app.use(express.json());

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

// app.get('/api/v1/tours/:id/:x/:y', (req, res) => {
//   console.log(req.params);
// });

app.get('/api/v1/tours/:id', (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((tour) => tour.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'tour not found',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  //   console.log(req.body); // body is a property that is gonna be available on the request because we used the middleware above
  //   res.send('Done');

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  // 201 means "created"
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({ status: 'success', data: { tour: newTour } });
    }
  );
});

//The PATCH request works in your code because JavaScript objects are referenced in memory.

// Why it Works Without Explicitly Updating tours:
//   tours.find((tour) => tour.id === id) returns a reference to the object inside the tours array.
//   Object.assign(tour, req.body) modifies the same object in memory, which means tours is also updated automatically.
//   Since tours holds references to the objects, any modification to tour is reflected in tours.

app.patch('/api/v1/tours/:id', (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((tour) => tour.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'tour not found',
    });
  }

  Object.assign(tour, req.body);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) {
        return res.status(500).json({
          status: 'error',
          message: 'Could not update tour',
        });
      }
      res.status(200).json({
        status: 'success',
        data: {
          tour,
        },
      });
    }
  );
});

app.delete('/api/v1/tours/:id', (req, res) => {
  const id = req.params.id * 1;
  const tourIndex = tours.findIndex((tour) => tour.id === id);

  if (tourIndex === -1) {
    return res.status(404).json({
      status: 'fail',
      message: 'tour not found',
    });
  }

  tours.splice(tourIndex, 1);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) {
        return res.status(500).json({
          status: 'error',
          message: 'Could not delete tour',
        });
      }
      res.status(204).json({
        // 204 No Content
        status: 'success',
        data: null,
      });
    }
  );
});

// express is a function which upon calling adds a bunch of methods to app
// first one we are calling is listen:
// we usually put app.listen at the end

const port = 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// now we need to define routes which is very simple in express
// app.get('/', (req, res) => {
//   res.status(200).send('Hello from the server side!');
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint!');
// });
