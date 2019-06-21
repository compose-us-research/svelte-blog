import { getPosts } from "./_posts.js";

export async function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  const posts = await getPosts();
  const contents = JSON.stringify(posts);
  res.end(contents);
}
