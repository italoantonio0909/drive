const express = require("express");
const http = require("http");
const cors = require("cors");
const body_parser = require("body-parser");
const morgan = require("morgan");
const DirectoryRoutes = require("./routes/Directory");
const FilesRoutes = require("./routes/Files");
const path = require("path");

const application = express();
const server = http.createServer(application);

/*Permission api and settings body parser*/
application.use(body_parser.urlencoded({ extended: false }));
application.use(body_parser.json());
application.use(cors());

/*Middlewares*/
application.use(morgan("dev"));

/*Express static*/
application.use(express.static(path.join(__dirname, "drive")));
/*Routes*/
application.use(DirectoryRoutes);
application.use(FilesRoutes);

application.set("port", process.env.PORT | 8000);

module.exports = { server, application };
