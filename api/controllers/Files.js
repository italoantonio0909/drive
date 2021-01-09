const fs = require("fs");
const { BASE_PATH } = require("../path");
const FilesController = {};
/**
 *
 * @param {string} directy Name of directory to get files avaibled.
 */
FilesController.getFiles = function (request, response) {
  const { directory } = request.params;
  const files = [];
  fs.readdir(`${BASE_PATH}/${directory}`, (error, data) => {
    if (error)
      return response.status(400).json({ message: "Directory no opened" });
    data.forEach((element) => {
      files.push({ name: element });
    });
    response.status(200).send(files);
  });
};

/**
 *Method upload file
 * @param {object} uploadFile
 */
FilesController.uploadFile = function (request, response) {
  const file = request.file;
  if (!file) {
    return response.status(400).json({ message: "Choose a image" });
  }
  return response.status(200).send(file.filename);
};
module.exports = FilesController;
