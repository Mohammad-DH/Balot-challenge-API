const AdminUser = require("./admin/user.controller");
const AdminRestaurant = require("./admin/restaurant.controller");
const AdminChallenge = require("./admin/challenges.controller");
const AdminAuthentication = require("./admin/authentication.controller");

const PublicUser = require("./public/user.controller");
const PublicRestaurant = require("./public/restaurant.controller");
const PublicChallenge = require("./public/challenges.controller");

module.exports = {
  AdminUser,
  AdminRestaurant,
  AdminChallenge,
  AdminAuthentication,

  PublicUser,
  PublicRestaurant,
  PublicChallenge,
};
