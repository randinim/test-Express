const express = require("express");
const path = require("path");
const app = express();
const PORT = 8082;
//serve the  static file
app.use(express.static(path.join(__dirname, "public")));
//HOME ROUTE
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

//Render About ROUTE
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});
//Contact ROUTE
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});
//Gallery ROUTE
app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "gallery.html"));
});
//Start the server
app.listen(PORT, console.log(`server is running on port ${PORT}`));
