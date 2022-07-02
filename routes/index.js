const express = require("express");

const { User, Restaurant } = require("../controllers");

const router = express.Router();

router.post("/user", User.AddUser);

router.get("/restaurant", Restaurant.AllRestaurants);
router.post("/restaurant", Restaurant.AddRestaurant);
router.put("/restaurant", Restaurant.UpdateRestaurant);
router.delete("/restaurant", Restaurant.RemoveRestaurant);

// router.post('/blogpost', blogpost.postBlogpost)
// router.post('/blogpost', blogpost.postBlogpost)
// router.post('/blogpost', blogpost.postBlogpost)

module.exports = router;
