const express = require("express");
const bp = require("body-parser").urlencoded({ extended: true });
const path = require("path");
const roomRouter = require("./routers/roomsRouter");
const profileRouter = require("./routers/profileRouter");
const { collection, connect, disconnect } = require("./model/mongodatabase");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res, next) => {
  res.render("home");
});

app.use("/profile", profileRouter);
app.use("/rooms", roomRouter);

app.listen(3000, console.log("Server running on port 3000"));
