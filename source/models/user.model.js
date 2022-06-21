import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      validate: (value) => {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address");
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 6,
      validate: (value) => {
        if (value.toLowerCase().includes("password")) {
          throw new Error("Password must not contain 'password'");
        }
        if (value.trim().includes(" "))
          throw new Error("Password must not contain space");
      },
    },
  },
  { timestamps: true }
);

// Hash user password
const saltRounds = 10;

userSchema.pre("save", function (next) {
  console.log("Saving user password");
  const user = this;
  if (!this.isModified("password") && !this.isNew) return;

  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      user.password = hash;
      return next();
    });
  });
});

userSchema.statics.isUserExist = async function (email) {
  // Check if there is email
  if (!email) throw new Error("Email must be provided");

  // Check if the email is already in the database
  try {
    const user = await this.findOne({ email: email });
    if (user) return true;
    return false;
  } catch (err) {
    console.log(err);
    return true;
  }
};

userSchema.methods.comparePassword = async function (password) {
  // Check if there is password
  if (!password) throw new Error("Password must be provided");

  // Check if the password is already in the database
  try {
    // return true if the password is equal to the this.password
    return await bcrypt.compare(password, this.password);
  } catch (err) {
    console.log(err);
  }
};

const User = mongoose.model("User", userSchema);
export default User;
