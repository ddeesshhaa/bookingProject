const express = require("express");
const path = require("path");
const homeRouter = require("./routers/home.router");
const roomsRouter = require("./routers/rooms.router");
const diningRouter = require("./routers/dinning.router");
const bookingRouter = require("./routers/bookings.router");
const reservation = require("./routers/reservation.router");
const afterreserving = require("./routers/afterreserving.router");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "assets")));

app.get("/", homeRouter);
app.use("/Rooms", roomsRouter);
app.use("/Dining", diningRouter);
app.use("/Bookings", bookingRouter);
app.use("/RestaurantReservation", reservation);
app.use("/afterreserving", afterreserving);

app.listen(3000, () => {
  console.log("App running on port 3000");
});
