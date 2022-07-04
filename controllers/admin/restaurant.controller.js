const { AdminRestaurantService } = require("../../services");

// Need Authentication
const AddRestaurant = async (req, res, next) => {
  try {
    let data = await AdminRestaurantService.CreateNewRestaurant(req.body);
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
    let data = await AdminRestaurantService.RemoveRestaurant(req.body);

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
    let data = await AdminRestaurantService.UpdateRestaurant(req.body);
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

module.exports = {
  AddRestaurant,
  RemoveRestaurant,
  UpdateRestaurant,
};
