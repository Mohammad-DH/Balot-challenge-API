const AdminUserDB = require("./admin/user.db");
const AdminRestaurantDB = require("./admin/restaurant.db");
const AdminChallengeDB = require("./admin/challenge.db");
const AdminAuthenticationDB = require("./admin/authentication.db");

const PublicUserDB = require("./public/user.db");
const PublicRestaurantDB = require("./public/restaurant.db");
const PublicChallengeDB = require("./public/challenge.db");
const PublicRecordDB = require("./public/record.db");

module.exports = {
  AdminUserDB,
  AdminRestaurantDB,
  AdminChallengeDB,
  AdminAuthenticationDB,

  PublicUserDB,
  PublicRestaurantDB,
  PublicChallengeDB,
  PublicRecordDB,
};
