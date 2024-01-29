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
app.use("/users", isAuthenticated, userRouter);
app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
