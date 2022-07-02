const { RestaurantDB } = require("../db");

const GetAllRestaurants = async () => {
  let AllRestaurants = await RestaurantDB.GetAllRestaurants();

  if (AllRestaurants.success === false) {
    throw new Error(AllRestaurants.error);
  } else {
    return AllRestaurants.Data;
  }
};

const CreateNewRestaurant = async (obj) => {
  let NewRestaurant = await RestaurantDB.CreateNewRestaurant(obj);

  if (NewRestaurant.success === false) {
    throw new Error(NewRestaurant.error);
  } else {
    return NewRestaurant.Data;
  }
};

const RemoveRestaurant = async (obj) => {
  let RemovedRestaurant = await RestaurantDB.RemoveRestaurant(obj);

  if (RemovedRestaurant.success === false) {
    throw new Error(RemovedRestaurant.error);
  } else {
    return RemovedRestaurant.Data;
  }
};

const UpdateRestaurant = async (obj) => {
  let UpdatedRestaurant = await RestaurantDB.UpdateRestaurant(obj);

  if (UpdatedRestaurant.success === false) {
    throw new Error(UpdatedRestaurant.error);
  } else {
    return UpdatedRestaurant.Data;
  }
};

module.exports = {
  GetAllRestaurants,
  CreateNewRestaurant,
  RemoveRestaurant,
  UpdateRestaurant,
};
