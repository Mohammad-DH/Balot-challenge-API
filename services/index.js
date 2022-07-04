const AdminUserService = require("./admin/user.service");
const AdminRestaurantService = require("./admin/restaurant.service");
const AdminChallengeService = require("./admin/challenge.service");
const AdminAuthentication = require("./admin/authentication.service");

const PublicUserService = require("./admin/user.service");
const PublicRestaurantService = require("./public/restaurant.service");
const PublicChallengeService = require("./public/challenge.service");

module.exports = {
  AdminUserService,
  AdminRestaurantService,
  AdminChallengeService,
  AdminAuthentication,

  PublicUserService,
  PublicRestaurantService,
  PublicChallengeService,
};
