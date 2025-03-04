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

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findById(id);
    // const tour = await Tour.findOne({ _id: id });
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.createTour = async (req, res) => {
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
      message: error,
      // message: 'Invalid data sent',
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const response = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour: response,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndRemove(req.params.id);
    // res.status(201).json({
    //   status: 'success',
    //   message: 'Tour deleted successfully',
    // });
    res.status(204).json();
  } catch (error) {
    res.status(404).json({
      status: 'success',
      message: error,
    });
  }
};
