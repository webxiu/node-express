import { Handler } from "../types";

const login: Handler = (req, res) => {
  // res.send("======login=====");
  res.render("login", { msg: "相约就比", data: { name: "开户行" } });
};

export default login;
