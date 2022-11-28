import UserSchema from "./UserSchema.js";

//create user
export const insertUser = (obj) => {
  return UserSchema(obj).save();
};

//login user

//delete user
