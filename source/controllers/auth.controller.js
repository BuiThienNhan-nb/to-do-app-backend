import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authController = {
  signUp: async function (req, res) {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const isExist = await User.isUserExist(email);
    if (isExist) {
      return res.json({ success: false, message: "User already exists!" });
    }

    // Handle request
    try {
      const user = User({
        name: name,
        email: email,
        password: password,
      });
      // Sign user token
      const token = jwt.sign(
        { _id: user._id.toString() },
        process.env.JWT_SECRET_KEY
      );
      user.token = token;
      await user.save().then((savedUser) => (user.id = savedUser._id));
      return res.json({ success: true, user: user });
    } catch (err) {
      return res.json({ success: false, message: err.message });
    }
  },

  signIn: async function (req, res) {
    const { email, password } = req.body;
    try {
      // Check if user already sign up
      const user = await User.findOne({ email });
      console.log(user);
      if (!user) {
        return res.json({ success: false, message: "User not found!" });
      }

      // Check if password is correct
      const isMatchPassword = await user.comparePassword(password);
      if (!isMatchPassword) {
        return res.json({ success: false, message: "Incorrect password!" });
      }
      return res.json({ success: true, user: user });
    } catch (err) {
      return res.json({ success: fail, message: err.message });
    }
  },
};
