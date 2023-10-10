const userRoute = require("./routes/userRoute");
const bookRoute = require("./routes/bookRoute");

var express = require("express");
var path = require("path");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/book", bookRoute);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
