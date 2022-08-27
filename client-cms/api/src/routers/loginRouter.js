import express from "express";

const route = express.Router();

route.get("/login", (req, res, next) => {
  try {
    console.log(login);
  } catch (error) {
    next(error);
  }
});

export default route;
