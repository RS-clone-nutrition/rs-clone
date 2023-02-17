import { Schema, model } from "mongoose";

const User = new Schema({
  username: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  weight: { type: String, require: true },
  goal: { type: String, require: true },
  height: { type: String, require: true },
  age: { type: String, require: true },
  gender: { type: String, require: true },
  aim: { type: String, require: true },
})

export default model('User', User);
