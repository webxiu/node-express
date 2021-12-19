import { Handler } from "../types";

export const user: Handler = (req, res) => {
  res.send({ home: "======home=====" });
};
