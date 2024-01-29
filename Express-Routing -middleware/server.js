const express = require("express");
const userRouter = require("./routes/usersRouters");
const postRouter = require("./routes/postsRouter");
const isAuthenticated = require("./middleware/isAuthenticated");
const app = express();
const PORT = 8082;
//Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the main app",
  });
});

//-USERS ROUTE-
app.use("/users", userRouter);
app.use("/posts", postRouter);
// //Getting all users
// app.get("/users", (req, res) => {
//   res.json({
//     message: "All users fetched",
//   });
// });
// //Getting a user
// app.get("/users/:id", (req, res) => {
//   res.json({
//     message: "All user fetched",
//   });
// });
// //Update a user
// app.put("/users/:id", (req, res) => {
//   res.json({
//     message: "user updated",
//   });
// });
// //delete a user
// app.delete("/users/:id", (req, res) => {
//   res.json({
//     message: "user deleted",
//   });
// });

// //-POST ROUTE-

// //Getting all users
// //Getting a user
// //Update a user
// //delete a user

//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
