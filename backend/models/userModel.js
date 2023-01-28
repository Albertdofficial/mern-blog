const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (username, email, password) {
  if (!email || !password) {
    throw new Error("All fields must be filed");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  // has the password to prvent password matching
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // create a mongoDB document for the user
  const user = await this.create({ username, email, password: hash });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filed");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error(`No user found with this email ${email}`);
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error(`Passwords do not match`);
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
