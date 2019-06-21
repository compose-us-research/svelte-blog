import getType from "cache-content-type";
import fs from "fs";
import { extname, resolve } from "path";
import { promisify } from "util";

import { BLOG_DIRECTORY } from "../../_posts.js";

export async function get(req, res) {
  const { slug, path } = req.params;
  const file = resolve(BLOG_DIRECTORY, slug, path);
  try {
    const stat = await promisify(fs.stat)(file);
    res.writeHead(200, { "Content-type": getType(extname(file)) });
    fs.createReadStream(file).pipe(res);
  } catch (err) {
    if (err.code === "ENOENT") {
      res.writeHead(404, {
        "Content-Type": "application/json"
      });

      res.end(
        JSON.stringify({
          message: `Not found`
        })
      );
    } else {
      res.writeHead(500, {
        "Content-Type": "application/json"
      });

      res.end(
        JSON.stringify({
          message: `Internal server error`
        })
      );
    }
  }
}
