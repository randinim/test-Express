const express = require("express");
//instance
const app = express();
//create the PORT
const PORT = 8082;
//Receiving incoming data from the client congih
app.use(express.json());

const books = [
  { id: "1", title: "The great Batsby", author: "F.Scott" },
  { id: "2", title: "Madolduwa", author: "Martin Wickramasinghe" },
  { id: "3", title: "Seven Flowers", author: "Charli" },
];

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to MERN",
    data: "Randini",
  });
});
//fetching all books
app.get("/books", (req, res) => {
  res.json({
    status: "success",
    message: "Books fetched successfully",
    data: books,
  });
});
//fetch a book
app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const bookFound = books.find((book) => book.id === id);
  console.log(bookFound);
  if (!bookFound) {
    return res.json({
      status: "failed",
      message: "Book with id not found",
    });
  }
  res.json({
    status: "success",
    message: "Books fetched successfully",
  });
});
//Create a book
app.post("/books", (req, res) => {
  const newPost = req.body;
  books.push(newPost);
  res.json({
    status: "success",
    message: "Books created successfully",
    data: books,
  });
});

//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
