const { RestaurantService } = require("../services");

const AllRestaurants = async (req, res, next) => {
  try {
    let data = await RestaurantService.GetAllRestaurants();
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

// Need Authentication
const AddRestaurant = async (req, res, next) => {
  try {
    let data = await RestaurantService.CreateNewRestaurant(req.body);
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

// Need Authentication
const RemoveRestaurant = async (req, res, next) => {
  try {
    let data = await RestaurantService.RemoveRestaurant(req.body);

    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

// Need Authentication
const UpdateRestaurant = async (req, res, next) => {
  try {
    let data = await RestaurantService.UpdateRestaurant(req.body);
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

module.exports = {
  AllRestaurants,
  AddRestaurant,
  RemoveRestaurant,
  UpdateRestaurant,
};
