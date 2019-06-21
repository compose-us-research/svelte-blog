import { getPostsDatabase } from "../_posts.js";

export async function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  try {
    const db = await getPostsDatabase();
    if (db.contains(slug)) {
      res.writeHead(200, {
        "Content-Type": "application/json"
      });
      const post = await db.get(slug);
      res.end(JSON.stringify(post));
    } else {
      res.writeHead(404, {
        "Content-Type": "application/json"
      });

      res.end(
        JSON.stringify({
          message: `Not found`
        })
      );
    }
  } catch (error) {
    console.error({ error });
    res.writeHead(500, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify({ message: "Internal server error" }));
  }
}
