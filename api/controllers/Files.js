const fs = require("fs");
const { BASE_PATH } = require("../path");
const FilesController = {};

FilesController.getFiles = function (request, response) {
  const { directory } = request.params;
  const files = [];
  fs.readdir(`${BASE_PATH}/${directory}`, (error, data) => {
    if (error)
      return response.status(400).json({ message: "Directory no opened" });
    data.forEach((element) => {
      files.push({ name: `http://localhost:8000/${element}` });
    });
    response.status(200).send(files);
  });
};

FilesController.uploadFile = function (request, response) {
  return response.status(200).send("ok yes, file.");
};
module.exports = FilesController;
