const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/Booking";

const restaurantSchema = mongoose.Schema({
  restId: Number,
  image: String,
  restName: String,
});

const Restaurant = mongoose.model("restaurant", restaurantSchema);

exports.getAllRestaurants = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB_URL)
      .then(() => {
        return Restaurant.find({});
      })
      .then((restaurants) => {
        mongoose.disconnect();
        resolve(restaurants);
      });
  });
};

exports.saveRestaurant = async (restName, restId, image) => {
  let data = {
    restName: restName,
    restId: +restId,
    image: image,
  };

  await mongoose.connect(DB_URL);
  await Restaurant.create(data);
  await mongoose.disconnect();
};
