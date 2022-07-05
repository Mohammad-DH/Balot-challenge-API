const express = require("express");

const { PublicUser, PublicRestaurant, PublicChallenge } = require("../controllers");

const router = express.Router();

router.get("/restaurant", PublicRestaurant.AllRestaurants);

router.post("/user", PublicUser.AddUser);

router.get("/challenge", PublicChallenge.AllChallenges);
router.post("/challenge/start", PublicChallenge.StartAChallenge);
router.post("/challenge/submit", PublicChallenge.SubmitAChallenge);
router.post("/challenge/records", PublicChallenge.RecordsOfAChallenge);

module.exports = router;
