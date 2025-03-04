const fs = require('fs');
const Tour = require('./../models/tourModel');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// exports.checkID = (req, res, next, val) => {
//   console.log(`Tour id is : ${val}`);
//   if (req.params.id * 1 > tours.length) {
//     console.log(`Tour id ${val} is invalid`);
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   } else {
//     console.log(`Tour id ${val} is valid`);
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   const requiredFields = ['name', 'price'];

//   for (const field of requiredFields) {
//     if (!req.body[field]) {
//       return res.status(400).json({
//         status: 'fail',
//         message: `Missing required field: ${field}`,
//       });
//     }
//   }

//   next();
// };

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  // const tour = tours.find((tour) => tour.id === id);

  // if (!tour) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'tour not found',
  //   });
  // }

  res.status(200).json({
    status: 'success',
    // data: {
    //   tour,
    // },
  });
};

exports.createTour = async (req, res) => {
  // const newId = tours[tours.length - 1].id + 1;
  // const newTour = Object.assign({ id: newId }, req.body);
  // tours.push(newTour);
  // fs.writeFile(
  //   `${__dirname}/../dev-data/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   (err) => {
  //     res.status(201).json({ status: 'success', data: { tour: newTour } });
  //   }
  // );

  try {
    // const newTour = new Tour({})
    // newTour.save()

    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { tour: newTour },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      // message: error,
      message: 'Invalid data sent',
    });
  }
};

exports.updateTour = (req, res) => {
  const id = req.params.id * 1;
  // const tour = tours.find((tour) => tour.id === id);

  // if (!tour) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'tour not found',
  //   });
  // }

  // Object.assign(tour, req.body);

  // fs.writeFile(
  //   `${__dirname}/../dev-data/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   (err) => {
  //     if (err) {
  //       return res.status(500).json({
  //         status: 'error',
  //         message: 'Could not update tour',
  //       });
  //     }
  //     res.status(200).json({
  //       status: 'success',
  //       data: {
  //         tour,
  //       },
  //     });
  //   }
  // );
};

exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  // const tourIndex = tours.findIndex((tour) => tour.id === id);

  // if (tourIndex === -1) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'tour not found',
  //   });
  // }

  // tours.splice(tourIndex, 1);

  // fs.writeFile(
  //   `${__dirname}/../dev-data/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   (err) => {
  //     if (err) {
  //       return res.status(500).json({
  //         status: 'error',
  //         message: 'Could not delete tour',
  //       });
  //     }
  //     res.status(204).json({
  //       // 204 No Content
  //       status: 'success',
  //       data: null,
  //     });
  //   }
  // );
};
