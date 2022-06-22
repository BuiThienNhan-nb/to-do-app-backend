import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const auth = async function authUserToken(req, res, next) {
  // Check header
  //   if (req.headers.get("Authorization") != null) {
  //     try {
  //       const token = req.headers.authorization.split(" ")[1];
  //       const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
  //       console.log(decode);
  //       const user = await User.findOne({ token: token });
  //       res.json({ success: true, user: user });
  //     } catch (err) {
  //       res.json({ success: false, message: err.message });
  //     }
  //   } else {
  //     res.json({ success: false, message: "Authentication failed" });
  //   }
  try {
    const token = req.header("Authorization").replace("JWT ", "");
    console.log(token);
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("decodedToken: ", decodedToken);
    const user = await User.findOne({
      _id: decodedToken._id,
      token: token,
    });
    if (!user) {
      res.json({ success: false, message: "Invalid token!" });
    }
    req.id = user._id;
    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    res.json({ success: false, message: "Invalid token!" });
  }
};

export default auth;
