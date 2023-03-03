const mongoose = require('mongoose');
require('colors');
const dotenv = require('dotenv');
dotenv.config();
//connecDB Function

mongoose.set('strictQuery', false);
const connectDb = async () => {
  try {
    // console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`,{ useNewUrlParser: true, useUnifiedTopology: true });
    // console.log(conn);
    console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow);
  } catch (error) {
    console.log(`Error : ${error.message}`.bgRed);
    process.exit(1);
  }
};

//export
module.exports = connectDb;
