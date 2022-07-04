const { RestaurantDB } = require("../../db");

const GetAllRestaurants = async () => {
  let AllRestaurants = await RestaurantDB.GetAllRestaurants();

  if (AllRestaurants.success === false) {
    throw new Error(AllRestaurants.error);
  } else {
    return AllRestaurants.Data;
  }
};

module.exports = {
  GetAllRestaurants,
};
