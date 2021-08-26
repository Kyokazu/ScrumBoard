const User = require("../models/user");
const bcrypt = require("bcrypt");
const { listeners } = require("../models/user");

const login = async(req, res) => {
    if (!req.body.email || !req.body.password)
        return res.status(400).send({ message: "Incomplete data" });
    let user = await User.findOne({ email: req.body.email });
    if (!user)
        return res.status(400).send({ message: "Incorrect Email or password" });

    if (user.dbStatus == false)
        return res.status(400).send("Incorrect Email of Password");

    try {
        const hash = bcrypt.compare(req.body.password, user.password);
        if (!hash) return res.status(400).send({ message: "Invalid credentials" });
        const jwt = user.generateJWT();
        return res.status(200).send({ jwt });
    } catch (error) {
        console.log("error");
        return res.status(400).send({ message: "Fail login" });
    }
};

module.exports = { login };