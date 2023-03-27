const router = require("express").Router();
const bp = require("body-parser").urlencoded({ extended: true });
const { collection, connect, disconnect } = require("../model/mongodatabase");

router.get("/", (req, res, next) => {
  //   connect();
  //   console.log("connected");
  //   console.log(collection.find({ roomId: 3000 }));
  //   res.send(collection.find({ roomId: 3000 }));
  //   disconnect();
});

router.get("/:roomId/:beds", bp, (req, res, next) => {
  connect();
  let data = {
    roomId: +req.params.roomId,
    beds: +req.params.beds,
  };
  collection.create(data);
  res.send("done");
  disconnect();
});

module.exports = router;
