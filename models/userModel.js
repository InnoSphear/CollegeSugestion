import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true }, // Can store phone numbers as string to keep leading 0's
}, {
  timestamps: true,
  versionKey: false,
});

const User = mongoose.model("User", UserSchema);

export default User;
