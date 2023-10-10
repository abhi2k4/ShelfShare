const catchAsync = require("./../util/catchAsync");
const book = require("./../Model/bookModel");

exports.getBooksByType = catchAsync(async (req, res, next) => {
  const books = await book.find({
    type: { $eq: req.params.type },
  });
  res.status(200).json({
    status: "success",
    data: {
      books,
    },
  });
});

exports.rentBook = catchAsync(async (req, res, next) => {
  const newBook = await book.create(req.body);
  console.log("success");

  res.status(201).json({
    status: "success",
    data: {
      data: newBook,
    },
  });
});
