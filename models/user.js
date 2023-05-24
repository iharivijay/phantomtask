import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  facebookId: String,
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

export default User;
