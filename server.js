import dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(morgan("dev")); // logs all the incoming req information
//app.use(helmet()) // setting default security headers to protect some attacks
app.use(cors()); // allow cross origin resourcesa
app.use(express.json()); //get income data in the req.body
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));
//mongoDB connection
import { connectDB } from "./src/config/dbConfig.js";
connectDB();
// routers
import userRouter from "./src/routers/userRouter.js";

app.use("/api/v1/user", userRouter);

import transRouter from "./src/routers/transRouter.js";
import { isAuth } from "./src/middleware/authmiddleware.js";
app.use("/api/v1/transaction", isAuth, transRouter);
app.get("/dashboard", (req, res) => {
  res.redirect("/");
});
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname), "/build/index.html");
});
app.use("*", (req, res) => {
  res.json({ message: "you are in the wrong place, yo go back!" });
});
app.use((error, req, res, next) => {
  console.log(error);
  const code = error.code || 500;
  res.status(code).json({
    status: "error",
    message: error.message,
  });
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is ready at http://localhost:${PORT}`);
});
