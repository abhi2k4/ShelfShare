const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  expectingRent: {
    type: Number,
    required: [true, "Expecting rent is required"],
    min: [50, "Minimum expecting rent is 50"],
    max: [60, "Maximum expecting rent is 60"],
  },
  bookImage: {
    type: String,
  },
  type: {
    type: String,
    enum: ["fiction", "non-fiction", "romance", "mystery", "fantasy"],
    required: [true, "The type is required"],
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
