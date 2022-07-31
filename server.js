const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const PORT = 3000;

// ミドルウェア
app.use("/api/users", userRoute);

// app.get("/", (req, res) => {
//   res.send("hello, express");
// });

// app.get("/users", (req, res) => {
//   res.send("Users, express");
// });

app.listen(PORT, () => console.log("サーバー起動"));
