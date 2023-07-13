const { encrypt, compare } = require("../Helpers/handleBcrypt");
const User = require("../model/userModel");
const mongoose = require("mongoose");

exports.createUser = async (req, res) => {
  console.log(req.body);
  const { email, username, password } = req.body;
  if (email && username && password) {
    try {
      const userExist = await User.findOne({ email });
      if (!userExist) {
        const hashPassword = await encrypt(password);
        const newUser = new User({ email, username, password: hashPassword });
        await newUser.save();
        res.status(200).json({ message: "User created!" });
        mongoose.connection.close();
      } else {
        res
          .status(404)
          .json({ error: "There is already a user with this email." });
        mongoose.connection.close();
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(404).json({ message: "Missing fields" });
  }
};

exports.getUser = async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    const user = await User.findOne({
      $or: [{ username: username }, { email: username }],
    });
    if (user) {
      const matchPassword = await compare(password, user.password);
      if (matchPassword) {
        res.status(200).json({ email: user.email, username: user.username });
      } else {
        res.status(404).json({ error: "Wrong password." });
      }
    } else {
      res
        .status(404)
        .json({ error: "There is no user with that username or email." });
      mongoose.connection.close();
    }
  } else {
    res.status(404).json({ message: "Missing fields." });
  }
};
