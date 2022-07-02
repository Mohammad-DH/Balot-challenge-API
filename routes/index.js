const express = require("express");

const { User, Restaurant, Challenge } = require("../controllers");

const router = express.Router();

router.post("/user", User.AddUser);

router.get("/restaurant", Restaurant.AllRestaurants);
router.post("/restaurant", Restaurant.AddRestaurant);
router.put("/restaurant", Restaurant.UpdateRestaurant);
router.delete("/restaurant", Restaurant.RemoveRestaurant);

router.get("/challenge", Challenge.AllChallenges);
router.post("/challenge", Challenge.AddChallenge);
router.put("/challenge", Challenge.UpdateChallenge);
router.delete("/challenge", Challenge.RemoveChallenge);

// router.post('/blogpost', blogpost.postBlogpost)
// router.post('/blogpost', blogpost.postBlogpost)

module.exports = router;
