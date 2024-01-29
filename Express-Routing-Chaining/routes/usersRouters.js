const express = require("express");

//create instance of express router
const userRouter = express.Router();

//using th route()

//getting all users
userRouter.route("/").get((req, res) => {
  res.json({
    message: "All users fetched",
  });
});
//Handle the specific user ID
userRouter
  .route("/:id")
  .get((req, res) => {
    res.json({
      message: "user  fetched",
    });
  })
  .put((req, res) => {
    res.json({
      message: "user  updated",
    });
  })
  .delete((req, res) => {
    res.json({
      message: "user  deleted",
    });
  });

module.exports = userRouter;
