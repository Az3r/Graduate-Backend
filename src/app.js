const { json } = require("body-parser");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(cookieParser());
app.use(compression());

module.exports = app;
