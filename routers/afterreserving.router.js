const router = require("express").Router();

router.use("/", (req, res, next) => {
  res.render("afterreserving");
});

module.exports = router;
