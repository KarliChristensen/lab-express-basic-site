const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(__dirname + "/html/index.html"));
app.get("/poi", (req, res) => res.sendFile(__dirname + "/html/poi.html"));
app.get("/about", (req, res) => res.sendFile(__dirname + "/html/about.html"));

app.post("/", (req, res) => {
  const params = req.params;
  res.send(params);
});

app.get("/about", (req, res) => {
  res.send("Welcome to about");
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
