const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello I am the Back End");
});
app.listen(port, () => {
  console.log("The Server is created and running on port 5000");
});
