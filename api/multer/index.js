const multer = require("multer");
const { join } = require("path");
const path = require("path");
const BASE_PATH = require("../path");

const storage = multer.diskStorage({
  filename: (request, file, cb) => {
    cb(null, Date.now() + "." + file.originalname);
  },
  destination: (request, file, cb) => {
    const name = "youtube";
    cb(null, path.join(__dirname, `../drive/${name}`));
  },
});
module.exports = storage;
