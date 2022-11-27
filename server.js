import express from "express";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(morgan("dev")); // logs all the incoming req information
//app.use(helmet()) // setting default security headers to protect some attacks
//app.router(cors()) // allow cross origin resources
app.use(express.json()); //get income data in the req.body

//mongoDB connection
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

app.use("*", (req, res) => {
  res.json({ message: "you are in the wrong place, yo go back!" });
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is ready at http://localhost:${PORT}`);
});
