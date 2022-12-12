import express from "express";
import {
  deleteManyTrans,
  getAllUserTransactions,
  insertTrans,
} from "../model/transaction/TransactionModel.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const trans = await getAllUserTransactions({ userId: authorization });
    res.json({
      status: "success",
      message: "get method to do",
      trans,
    });
  } catch (error) {
    next(error);
  }
});

//create
router.post("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const result = await insertTrans({ ...req.body, userId: authorization });
    result?._id
      ? res.json({
          status: "success",
          message: "Transaction added succeccfully",
        })
      : res.json({
          status: "error",
          message: "Unable to add,please try again later",
        });
  } catch (error) {
    next(error);
  }
});

//delete
router.delete("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    const result = await deleteManyTrans(req.body, authorization);
    console.log(result);
    result?.deletedCount
      ? res.json({
          status: "success",
          message: result.deletedCount + "delete method to do",
        })
      : res.json({
          status: "error",
          message: "Nothign Happened",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
