const User = require("../models/user.model");
const bycrypt = require("bcrypt");
const jwtprovider = require("../config/jwtprovider");
const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    const iUserExist = await User.findOne({ email });

    if (iUserExist) {
      throw new Error("User already exist with email", email);
    }

    password = await bycrypt.hash(password, 8);

    const user = await User.create({ firstName, lastName, email, password });
    console.log("Created User", user);

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId)
    // .populate("address");
    if (!user) {
      throw new Error("User not found with id", userId);
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found with email", email);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtprovider.getUserIdFromToken(token);
    const user = await findUserById(userId);
    if (!user) {
      throw new Error("User not found with id", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = {
  createUser,
  getUserByEmail,
  findUserById,
  getUserProfileByToken,
  getAllUsers,
};
