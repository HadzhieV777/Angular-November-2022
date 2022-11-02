import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Welcome to our Homepage!");
});

app.get("/about", (req, res) => {
  res.send("About us page.");
});

app.listen(port, () => {
  console.log(`Server is listening on :${port}`);
});
