import { api, download, upload } from "./api";

import { Route } from "./types";
import { home } from "./home";
import login from "./login";
import { requestLogger } from "../middleware/requestLogger";
import { test } from "./test";

export const routes: Route[] = [
  { path: "/login", method: "get", middleware: [], handler: login },
  { path: "/home", method: "get", middleware: [], handler: home },
  { path: "/api", method: "post", middleware: [], handler: api },
  { path: "/upload", method: "post", middleware: [], handler: upload },
  { path: "/file/:id", method: "get", middleware: [], handler: download },
  { path: "/test", method: "get", middleware: [requestLogger], handler: test },
];
