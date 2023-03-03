const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { bgCyan } = require('colors');
require('colors');
//dotenv config
dotenv.config();
//dbconfig
const connectDb = require('./config/config');
connectDb();
// console.log(MONGO_URI);
//rest object
const app = express();

app.use(express.json());

app.use('api/items', require('./routes/itemRoutes'));

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

//routes

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`.bgCyan.white);
});
