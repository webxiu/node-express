import "colors";

import express, { Application } from "express";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import createError from "http-errors";
import logger from "morgan";
import { message } from "../../../electron/speakin/voice_provence_web/src/common/utils";
import path from "path";
import { routes } from "./router";

const app: Application = express();
const port = 9000;

app.set("views", path.join(__dirname, "./views"));
// app.engine("html", require("ejs").__express);
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cookieParser());

routes.forEach((route) => {
  const { method, path, middleware, handler } = route;
  app[method](path, ...middleware, handler);
});

app.listen(port, () => {
  console.log(`- Network: `.rainbow, `http://localhost:${port}`.blue);
});
