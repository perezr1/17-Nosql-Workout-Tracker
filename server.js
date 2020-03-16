const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const User = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.use(express.static("public"));

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", {
    // app requested update
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => {
    throw err;
  });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
