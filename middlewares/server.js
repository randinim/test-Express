const express = require("express");
const app = express();
const PORT = 8082;

//serve static files
//app.use(express.static())

//pass incoming data
app.use(express.json());

//APP_LEVEL_MIDDLEWARE-----
//logging details of every request
app.use((req, res, next) => {
  console.log(req.body);
  console.log("Am an app level middleware");
});

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
