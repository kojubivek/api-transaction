import express from "express";
import { insertUser, getUser } from "../model/user/UserModel.js";

const router = express.Router();

//create user router

router.post("/", async (req, res, next) => {
  try {
    const user = await insertUser(req.body);
    console.log(user);
    if (user?._id) {
      return res.json({
        status: "success",
        message: "User created successfully, yo may login now",
      });
    }
    res.json({
      status: "error",
      message: "unable to create user. User already Created, yo may login now",
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.code = 200;
      error.message = "dulication email";
    }
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const user = await getUser();
    console.log(user);
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
