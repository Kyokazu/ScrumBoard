const Role = require("../models/role");

const admin = async(req, res, next) => {
    let role = await Role.findById(req.user.role);
    if (!role)
        return res.status(409).send("Process Failed: The role does not exist");

    if (role.name === "admin") next();
    else return res.status(400).send("Process Failed: Unauthorized user");
};

module.exports = admin;