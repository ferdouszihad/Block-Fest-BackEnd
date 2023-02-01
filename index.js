const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
const users = [
  {
    id: 1,
    name: "Rehody",
    email: "rehody@gmail.com",
  },
  {
    id: 2,
    name: "Reaz",
    email: "Reaz@gmail.com",
  },
  {
    id: 3,
    name: "Sakib",
    email: "Sakib@gmail.com",
  },
];

app.post("/addNew", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(user);
});

app.get("/", (req, res) => {
  res.send("Hello I am the Back End");
});

app.get("/members", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log("The Server is created and running on port 5000");
});
