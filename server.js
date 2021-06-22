const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models");

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/infinite-savannah", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
