const express = require("express");
const path = require("path");
const app = express();
const PORT = 8082;
//serve the  static file
app.use(express.static(path.join(__dirname, "public")));
//Set the view engine as ejs
app.set("veiw engine", "ejs");

//HOME ROUTE
app.get("/", (req, res) => {
  res.render("home.ejs");
});

//Render About ROUTE
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
//Contact ROUTE
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
//Gallery ROUTE
app.get("/gallery", (req, res) => {
  res.render("gallery.ejs");
});
//userdata ROUTE
app.get("/userData", (req, res) => {
  const userData = {};
  res.render("userData.ejs", {
    username: "Randini",
    age: 23,
    isPremiumUser: true,
    email: "randi@gmail.com",
  });
});
//Start the server
app.listen(PORT, console.log(`server is running on port ${PORT}`));
