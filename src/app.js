const { json } = require("body-parser");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(cookieParser());
app.use(compression());

// configure routes
routes.forEach((route) => app.use(route.endpoint, route.router));

module.exports = app;
