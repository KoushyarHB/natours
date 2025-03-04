const fs = require('fs');

// const users = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
// );

// exports.checkID = (req, res, next, val) => {
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

exports.getAllUsers = (req, res) => {
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

exports.getUser = (req, res) => {
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

exports.createUser = (req, res) => {
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

exports.updateUser = (req, res) => {
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

exports.deleteUser = (req, res) => {
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
