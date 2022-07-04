const express = require("express");

const {
  PublicUser,
  PublicRestaurant,
  PublicChallenge,
} = require("../controllers");

const router = express.Router();

router.get("/restaurant", PublicRestaurant.AllRestaurants);

router.post("/user", PublicUser.AddUser);

router.get("/challenge", PublicChallenge.AllChallenges);
router.post("/challenge/start", PublicChallenge.StartAChallenges);
router.post("/challenge/submit", PublicChallenge.SubmitAChallenges);

module.exports = router;
