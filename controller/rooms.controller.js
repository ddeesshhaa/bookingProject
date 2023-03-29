const roomsModel = require("../models/rooms.model");

exports.getRooms = (req, res, next) => {
  roomsModel.getAllRooms().then((room) => {
    res.render("Rooms", {
      rooms: room,
    });
  });
};

exports.roomsAPI = (req, res, next) => {
  roomsModel.getAllRooms().then((rooms) => {
    res.send(rooms);
  });
};

exports.addRoom = (req, res, next) => {
  getRoomsModel.saveRoom(
    req.params.roomName,
    req.params.roomId,
    req.params.extras,
    req.params.image,
    req.params.roomCap,
    req.params.view
  );
  res.send("Added");
};
