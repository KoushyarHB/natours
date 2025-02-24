const express = require('express');
const fs = require('fs');
const app = express();
const morgan = require('morgan');

//========== 1) MIDDLEWARES ==========

app.use(morgan('dev'));
// the use method is the method we use to add middleware to our middleware stack
// in the next line express.json returns a function and that function is then added to our middleware stack
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  // if we dont use next the request response cycle gets stuck and we can never send a response back to the client
  next();
});

// if we moved this middleware to in between the routes then it wouldn't work for some routes

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/users.json`)
);

//========== 2) ROUTE HANDLERS ==========

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    requestedAt: req.requestTime,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
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
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({ status: 'success', data: { tour: newTour } });
    }
  );
};

const updateTour = (req, res) => {
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
};

const deleteTour = (req, res) => {
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
};

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
  //   res.status(200).json({
  //     status: 'success',
  //     results: users.length,
  //     requestedAt: req.requestTime,
  //     data: {
  //       users,
  //     },
  //   });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
  //   const id = req.params.id * 1;
  //   const user = users.find((user) => user.id === id);
  //   if (!user) {
  //     return res.status(404).json({
  //       status: 'fail',
  //       message: 'user not found',
  //     });
  //   }
  //   res.status(200).json({
  //     status: 'success',
  //     data: {
  //       user,
  //     },
  //   });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
  //     const newId = users[users.length - 1].id + 1;
  //   const newUser = Object.assign({ id: newId }, req.body);
  //   users.push(newUser);
  //   fs.writeFile(
  //     `${__dirname}/dev-data/data/users.json`,
  //     JSON.stringify(users),
  //     (err) => {
  //       res.status(201).json({ status: 'success', data: { user: newUser } });
  //     }
  //   );
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
  //   const id = req.params.id * 1;
  //   const user = users.find((user) => user.id === id);

  //   if (!user) {
  //     return res.status(404).json({
  //       status: 'fail',
  //       message: 'user not found',
  //     });
  //   }

  //   Object.assign(user, req.body);

  //   fs.writeFile(
  //     `${__dirname}/dev-data/data/users.json`,
  //     JSON.stringify(users),
  //     (err) => {
  //       if (err) {
  //         return res.status(500).json({
  //           status: 'error',
  //           message: 'Could not update user',
  //         });
  //       }
  //       res.status(200).json({
  //         status: 'success',
  //         data: {
  //           user,
  //         },
  //       });
  //     }
  //   );
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
  //   const id = req.params.id * 1;
  //   const userIndex = users.findIndex((user) => user.id === id);

  //   if (userIndex === -1) {
  //     return res.status(404).json({
  //       status: 'fail',
  //       message: 'user not found',
  //     });
  //   }

  //   users.splice(userIndex, 1);

  //   fs.writeFile(
  //     `${__dirname}/dev-data/data/users.json`,
  //     JSON.stringify(users),
  //     (err) => {
  //       if (err) {
  //         return res.status(500).json({
  //           status: 'error',
  //           message: 'Could not delete user',
  //         });
  //       }
  //       res.status(204).json({
  //         // 204 No Content
  //         status: 'success',
  //         data: null,
  //       });
  //     }
  //   );
};

//========== 3) ROUTES ==========

app.route('/api/v1/tours').get(getAllTours).post(createTour);

// app.use((req, res, next) => {
//   console.log('Hello from the middleware');
//   next();
// });

// Why aren't we seeing the log?
// Because the middleware in line 134 comes before the middleware in line 136 and the one above ends the request response cycly with the function inside of it (getAllTours or createTour)

app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

app.route('/api/v1/users').get(getAllUsers).post(createUser);
app
  .route('/api/v1/users/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

//========== 4) START SERVER ==========

const port = 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
