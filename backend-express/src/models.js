const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  birthdate: {
    type: Date,
    required: false,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };