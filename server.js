const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

// env is set to development by default by express
// console.log(app.get('env'));
// nodejs itself sets a lot of env variables in process
// console.log(process.env);
// in express many packages depend on a variable called node env which determines whether  we are in development or production mode

// const port = 4000;
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
