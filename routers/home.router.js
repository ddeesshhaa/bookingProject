const router = require("express").Router();

router.use("/", (req, res, next) => {
  res.render("home");
});

module.exports = router;
