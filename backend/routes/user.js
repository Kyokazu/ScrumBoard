const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");
const Admin = require("../middleware/admin");

router.post("/registerUser", userController.registerUser);
router.get(
    "/listUser/:name?",
    Auth,
    ValidateUser,
    Admin,
    userController.listUser
);
router.post(
    "/registerAdmin",
    Auth,
    ValidateUser,
    Admin,
    userController.registerAdmin
);
router.put("/updateUser", Auth, ValidateUser, userController.updateUser);
router.put("/deleteUser", Auth, ValidateUser, userController.deleteUser);

module.exports = router;