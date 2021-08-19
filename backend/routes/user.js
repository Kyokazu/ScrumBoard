const express = require("express");

const router = express.Router();
const userController = require("../controllers/user");

router.post("/registerUser", userController.registerUser);
router.get("/listUser/:name?", userController.listUser);

module.exports = router;