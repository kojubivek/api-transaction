import { findUser } from "../model/user/UserModel.js";

export const isAuth = async (res, req, next) => {
  //if valid user thenreturn true otherwise false...
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    const user = authorization ? await findUser({ _id: authorization }) : null;
    user?._id
      ? next()
      : res.json({
          status: "error",
          message: "Unauthoriezed",
        });
  } catch (error) {
    next(error);
  }
};
