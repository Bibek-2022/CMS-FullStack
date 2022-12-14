import { verifyAccessJWT } from "../helpers/jwtHelper.js";
// import { getOneAdmin } from "../models/adminUser/AdminModel.js";
import { getOneUser } from "../models/clientUser/ClientModel.js";

import { getSession } from "../models/session/SessionModel.js";

export const userAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      // is valid token
      const decoded = verifyAccessJWT(authorization);

      if (decoded === "jwt expired") {
        return res.status(403).json({
          status: "error",
          message: "jwt expired",
        });
      }

      if (decoded?.email) {
        // is exist in the session table
        const existIbDB = await getSession({
          type: "jwt",
          token: authorization,
        });

        // get user info and do next
        if (existIbDB?._id) {
          const user = await getOneUser({
            email: decoded.email,
          });

          if (user?._id) {
            req.adminInfo = user;
            return next();
          }
        }
      }

      //otherwise return 403 status
    }

    res.status(401).json({
      status: "error",
      message: "Unauthorized",
    });
  } catch (error) {
    next(error);
  }
};
