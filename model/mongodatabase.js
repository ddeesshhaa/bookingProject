const mongo = require("mongoose");

let connect = function connect() {
  mongo.connect("mongodb://localhost:27017/BookingRooms");
  console.log("Connected");
};

let disconnect = function disconnect() {
  mongo.disconnect();
  // console.log("Disconnected");
};

const schema = mongo.Schema({
  roomId: {
    type: Number,
  },
  beds: {
    type: Number,
  },
});
let collection = new mongo.model("rooms", schema);

exports.collection = collection;
exports.connect = connect;
exports.disconnect = disconnect;
