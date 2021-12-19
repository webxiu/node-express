import { Handler } from "../types";

export const test: Handler = (req, res) => {
  res.send({ test: "======test=====" });
};
