const express = require("express");

//create instance of express router
const userRouter = express.Router();
//getting all users
userRouter.get("/users", (req, res) => {
  res.json({
    message: "All users fetched",
  });
});
//getting a user
userRouter.get("/:id", (req, res) => {
  res.json({
    message: "user  fetched",
  });
});
//update a user
userRouter.put("/:id", (req, res) => {
  res.json({
    message: "user  updated",
  });
});

//delete a user
userRouter.delete("/:id", (req, res) => {
  res.json({
    message: "user  deleted",
  });
});

module.exports = userRouter;
