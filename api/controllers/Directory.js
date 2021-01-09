const fs = require("fs");
const { BASE_PATH } = require("../path");
const Directory = {};

/**
 * Method that allow send directories vector.
 *
 * @return {[]} directories
 */
Directory.getDirectories = function (request, response) {
  const directories = [];
  fs.readdir(BASE_PATH, (error, files) => {
    if (error) {
      console.log("No se puede abrir ficheros");
    }
    files.forEach((file) => {
      directories.push({ name: file });
    });
    return response.send(directories.sort());
  });
};

/**
 * Method that allow create directories.
 *
 * @param {string} name Name directory
 * @return {[]} directories
 */
Directory.createDirectory = function (request, response) {
  const { name } = request.body;
  if (!name) {
    return response.status(400).json({ message: "Directory name is required" });
  }
  if (fs.existsSync(`${BASE_PATH}/${name}`)) {
    return response.status(400).json({ message: "Directory already exists" });
  }
  fs.mkdir(`${BASE_PATH}/${name}`, (error) => {
    if (error) console.log(error);
    return response.status(200).json(name);
  });
};
module.exports = Directory;
