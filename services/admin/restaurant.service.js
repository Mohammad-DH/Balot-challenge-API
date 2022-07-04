const { AdminRestaurantDB } = require("../../db");

const CreateNewRestaurant = async (obj) => {
  let NewRestaurant = await AdminRestaurantDB.CreateNewRestaurant(obj);

  if (NewRestaurant.success === false) {
    throw new Error(NewRestaurant.error);
  } else {
    return NewRestaurant.Data;
  }
};

const RemoveRestaurant = async (obj) => {
  let RemovedRestaurant = await AdminRestaurantDB.RemoveRestaurant(obj);

  if (RemovedRestaurant.success === false) {
    throw new Error(RemovedRestaurant.error);
  } else {
    return RemovedRestaurant.Data;
  }
};

const UpdateRestaurant = async (obj) => {
  let UpdatedRestaurant = await AdminRestaurantDB.UpdateRestaurant(obj);

  if (UpdatedRestaurant.success === false) {
    throw new Error(UpdatedRestaurant.error);
  } else {
    return UpdatedRestaurant.Data;
  }
};

module.exports = {
  CreateNewRestaurant,
  RemoveRestaurant,
  UpdateRestaurant,
};
