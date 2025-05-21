const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./data/database");
const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.use("/", require("./routes"));

mongodb.initDatabase((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Running on port ${port}`);
    });
  }
});
