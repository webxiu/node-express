import * as fs from "fs";
import * as path from "path";

import { Handler } from "../types";

export const api: Handler = (req, res) => {
  res.send({ home: "======home=====" });
};

export const upload: Handler = (req, res) => {
  // console.log(req.files);
  // var file = __dirname + "/" + req.files.file.name;
  // fs.readFile(req.files.file.path, (err, data) => {
  //   fs.writeFile(file, data, (err) => {
  //     if (err) {
  //       res.send({ status: 0, msg: "成功", data: file });
  //     } else {
  //       res.send({ status: 1, msg: "失败", data: null });
  //     }
  //   });
  // });
  // =================================
  // const response = [];
  // const files: File[] = [];
  // const url = path.join(process.cwd(), `/upload`);
  // const result = new Promise((resolve, reject) => {
  //   files.map((v) => {
  //     fs.readFile(v.path, function (err, data) {
  //       fs.writeFile(`${url}/${v.originalname}`, data, function (err, data) {
  //         const result = { file: v };
  //         if (err) reject(err);
  //         resolve("成功");
  //       });
  //     });
  //   });
  // });
  // result
  //   .then((r) => {
  //     res.json({ msg: "上传成功" });
  //   })
  //   .catch((err) => {
  //     res.json({ err });
  //   });
};

export const download: Handler = (req, res) => {
  res.setHeader("Content-Type", "image/png");
  const id = req.params["id"];
  const url = path.join(process.cwd(), `/upload/${id}.png`);
  const cs = fs.createReadStream(url);

  cs.on("data", (chunk) => {
    res.write(chunk);
  });
  cs.on("end", () => {
    res.status(200);
    res.end();
  });
};
