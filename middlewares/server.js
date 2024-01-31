const express = require("express");
const app = express();
const PORT = 8082;

//serve static files
//app.use(express.static())

//pass incoming data
app.use(express.json());

//APP_LEVEL_MIDDLEWARE-----
//logging details of every request
const logRequest = (req, res, next) => {
  console.log(
    `Request received at:${new Date().toISOString()} for ${req.method} to ${
      req.path
    }`
  );
  next();
};
app.use(logRequest);
//Home
app.post("/", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Welcome to this app",
  });
});
//Create a book
app.post("/books", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Built in middleware demo",
  });
});

//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
