const { PublicRestaurantService } = require("../../services");

const AllRestaurants = async (req, res, next) => {
  try {
    let data = await PublicRestaurantService.GetAllRestaurants();
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

module.exports = {
  AllRestaurants,
};
