const express = require("express");
const auth = require("../middlewares/authentication.middlewares.js");

const { AdminUser, AdminRestaurant, AdminChallenge } = require("../controllers");

const router = express.Router();

router.get("/user", auth.check, AdminUser.GetAllUsers);
router.delete("/user", auth.check, AdminUser.RemoveUser);
router.put("/user", auth.check, AdminUser.UpdateUser);

router.post("/restaurant", auth.check, AdminRestaurant.AddRestaurant);
router.put("/restaurant", auth.check, AdminRestaurant.UpdateRestaurant);
router.delete("/restaurant", auth.check, AdminRestaurant.RemoveRestaurant);

router.post("/challenge", auth.check, AdminChallenge.AddChallenge);
router.put("/challenge", auth.check, AdminChallenge.UpdateChallenge);
router.delete("/challenge", auth.check, AdminChallenge.RemoveChallenge);
router.post("/challenge/active", auth.check, AdminChallenge.ActiveChallenge);

module.exports = router;
