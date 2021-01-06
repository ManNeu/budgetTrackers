const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 8008;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
const MONGODB_URI = 'mongodb+srv://ManNeu:Nepal123@cluster0.0etvo.mongodb.net/budget'
mongoose.connect(MONGODB_URI || "mongodb://localhost/budget", { useNewUrlParser: true, useUnifiedTopology: true });
// const MONGODB_URI = 'mongodb+srv://ManNeu:Nepal123@cluster0.0etvo.mongodb.net/budget'

// mongoose.connect(MONGODB_URI || "mongodb://localhost/userdb", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// }, () => console.log("mongoose is connected"));

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});