const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const bookModel = require("./Model/bookModel");

dotenv.config({ path: "./config.env" });
const app = require("./app");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//Import Data
const jsonData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "book.json"), "utf-8")
);

const importData = async () => {
  try {
    await bookModel.create(jsonData);
    console.log("Data inserted successfully");
  } catch (err) {
    console.error("Error inserting data:", err);
  }
};
// console.log(process.argv);
if (process.argv[2] === "--import") {
  importData();
}
