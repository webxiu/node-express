import { Handler } from "../types";

export const home: Handler = (req, res) => {
  // res.send({ home: "======home=====" });
  res.render("home", { msg: "home 的好", name: "厄尔人" });
};
