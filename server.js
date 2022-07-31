const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello, express");
});

app.listen(PORT, () => console.log("サーバー起動"));
