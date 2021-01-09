const fs = require("fs");
const { BASE_PATH } = require("../path");
const Directory = {};

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

Directory.deleteDirectory = function (request, response) {
  const { name } = request.body;
  if (fs.existsSync(`${BASE_PATH}/${name}`)) {
    fs.unlink(`${BASE_PATH}/${name}`, (error) => console.log(error));
    return response.status(200).send("Directory deleted");
  }
};

module.exports = Directory;
