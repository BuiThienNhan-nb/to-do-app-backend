import User from "../models/user.model.js";

export const userController = {
  testCreateUser: async function (req, res) {
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
      await user.save();
      return res.json(user);
    } catch (err) {
      return res.json({ success: false, error: err.message });
    }
  },

  signIn: async function (req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ success: false, message: "User not found!" });
      }

      // Check if password is correct
      const isMatchPassword = await user.comparePassword(password);
      console.log("user password: ", user.password);
      console.log("sign-in-password: ", password);
      console.log(isMatchPassword);
      if (!isMatchPassword) {
        return res.json({ success: false, message: "Incorrect password!" });
      }

      return res.json({ success: true, user: user });
    } catch (err) {
      return res.json({ success: fail, message: err.message });
    }
    // Check if user already sign up
  },
};
