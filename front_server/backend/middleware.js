const multer = require("multer");

const ImageUpload = multer({ dest: "uploads/" });

const uploadImageMulterMiddleware = ImageUpload.single("file");

module.exports = { uploadImageMulterMiddleware };