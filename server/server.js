import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/authRouter.js";
import cors from "cors";
import loaderRouter from "./routes/loaderRouter.js"
import postRouter from "./routes/postRouter.js"

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors())
app.use(express.json())
app.use(authRouter)
app.use(loaderRouter)
app.use(postRouter)


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
