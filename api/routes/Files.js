const FilesRoutes = require("express").Router();
const FilesController = require("../controllers/Files");
const multer = require("multer");
const storage = require("../multer");

FilesRoutes.get("/api/drive/files/:directory", FilesController.getFiles);
/*Upload file*/
const uploadImage = multer({ storage });
FilesRoutes.post(
  "/api/drive/files-upload/:directory",
  uploadImage.single("uploadFile"),
  FilesController.uploadFile
);

module.exports = FilesRoutes;
