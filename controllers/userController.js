const userModel = require('../models/userModel');

// get items
const loginController = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await userModel.findOne({ userId, password, verified: true });
    res.status(200).send('Login Successful');
  } catch (error) {
    console.log(error);
  }
};

//add items
const registerController = async (req, res) => {
  try {
    const newUser = new userModel({ ...req.body, verified: true });
    await newUser.save();
    res.status(201).send('new user added Successfully!');
  } catch (error) {
    res.status(400).send('error', error);
    console.log(error);
  }
};
module.exports = { loginController, registerController };
