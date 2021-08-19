const User = require("../models/user");

const User = async(req, res, next) => {

    const user = await User.findById(req.user.id);

    if (!user) {
        return res.status(400).send("Process failed: User without permissions");
    }
    next();

}

module.exports = user;