const express = require('express');

const app = express();

// express is a function which upon calling adds a bunch of methods to app
// first one we are calling is listen:

const port = 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// now we need to define routes which is very simple in express
app.get('/', (req, res) => {
  //   res.status(200).send('Hello from the server side!');
  res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('You can post to this endpoint!');
});
