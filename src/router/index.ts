import { Route } from "./types";
import { home } from "./home";
import login from "./login";
import { requestLogger } from "../middleware/requestLogger";
import { test } from "./test";
import { user } from "./user";

export const routes: Route[] = [
  { path: "/login", method: "get", middleware: [], handler: login },
  { path: "/home", method: "get", middleware: [], handler: home },
  { path: "/user", method: "post", middleware: [], handler: user },
  { path: "/test", method: "get", middleware: [requestLogger], handler: test },
];
