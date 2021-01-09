const routes = require("express").Router();
const controller = require("../controllers/Directory");

routes.get("/api/drive/directory", controller.getDirectories);
routes.post("/api/drive/directory-create", controller.createDirectory);
routes.post("/api/drive/directory-delete", controller.deleteDirectory);

module.exports = routes;
