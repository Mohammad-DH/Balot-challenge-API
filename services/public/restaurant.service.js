const { PublicRestaurantDB } = require("../../db");

const GetAllRestaurants = async () => {
  let AllRestaurants = await PublicRestaurantDB.GetAllRestaurants();

  if (AllRestaurants.success === false) {
    throw new Error(AllRestaurants.error);
  } else {
    return AllRestaurants.Data;
  }
};

module.exports = {
  GetAllRestaurants,
};
