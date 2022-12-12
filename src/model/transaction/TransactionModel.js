import TransactionSchema from "./TransactionSchema.js";

//crud
//insert
export const insertTrans = (obj) => {
  return TransactionSchema(obj).save();
};
//read
export const getAllUserTransactions = (filter) => {
  return TransactionSchema.find(filter);
};

//update
export const updateTransaction = (obj) => {
  return TransactionSchema(obj).updateOne();
};

//dellete
export const deleteTransaction = (obj) => {
  return deleteTransaction.deleteOne(obj);
};

export const deleteManyTrans = (ids, userId) => {
  return TransactionSchema.deleteMany({
    _id: { $in: ids },
    userId,
  });
};
