import express from "express";
import mongoose from "mongoose";


const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
  try {
    mongoose.set('strictQuery', true);
    mongoose.connect('mongodb+srv://user:123@cluster0.pfipb8l.mongodb.net/?retryWrites=true&w=majority')
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (e) {
    console.log(e);
  }
}

start();
