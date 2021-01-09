const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  /*Filename and save file*/
  filename: (request, file, cb) => {
    const { directory } = request.params;
    cb(null, Date.now() + "." + file.originalname);
  },
  /*Obtain parameters of route and save with directory param*/
  destination: (request, file, cb) => {
    const { directory } = request.params;
    cb(null, path.join(__dirname, `./drive/${directory}`));
  },
});
module.exports = storage;
