var express = require("express");
var router = express.Router();
var { uploadImage } = require("../controllers/imageController");

// const multer = require("multer");
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

const multer = require("multer");

const upload = multer({ dest: "./public/tmp/uploads/" });

/* Post. Upload Image to Cloudinary */
router.post("/", upload.single("file"), uploadImage);

module.exports = router;
