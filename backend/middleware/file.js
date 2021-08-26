const upload = async(req, res, next) => {
    if (req.files.image.type) {
        let type = req.files.image.type;
        if (
            type !== "image/png" &&
            type !== "image/jpg" &&
            type !== "image/jpeg" &&
            type !== "image/gif"
        ) {
            return res.status(400).send("Invalid format: Only png, jpg, jpeg and gif formats are accepted");
        }
        next();
    }
};

module.exports = upload;