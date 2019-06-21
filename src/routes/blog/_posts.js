import { promisify } from "util";
import { readFile, readdir } from "fs";
import { resolve } from "path";
import jsYaml from "js-yaml";
import showdown from "showdown";

export const BLOG_DIRECTORY = "./static/blog";

const readFileAsync = promisify(readFile);

export async function getPosts() {
  return await readBlogPosts();
}

export async function getPostsDatabase() {
  const posts = await readBlogPosts();
  const lookup = new Map();
  posts.forEach(post => {
    lookup.set(post.slug, post);
  });

  return {
    contains: slug => lookup.has(slug),
    get: slug => lookup.get(slug)
  };
}

async function readBlogPosts() {
  const blogDirs = await promisify(readdir)(resolve(BLOG_DIRECTORY));

  return Promise.all(blogDirs.map(async dir => await readBlogPost(dir)));
}

async function readBlogPost(dir) {
  const basePath = resolve(BLOG_DIRECTORY, dir);
  const fileContent = await readFileAsync(resolve(basePath, `${dir}.md`), "utf8");
  const isAbsoluteMatch = match => /^(.*:|\/)/.test(match);
  const publicUrl = `/blog/${dir}/`;
  const publicUrlExtension = {
    type: "output",
    regex: /<img src="([^"]*?)"/g,
    replace: (complete, srcMatch) =>
      `<img rel="prefetch" src="${isAbsoluteMatch(srcMatch) ? "" : publicUrl}${srcMatch}"`
  };
  showdown.extension("public-url", function() {
    return [publicUrlExtension];
  });
  const converter = new showdown.Converter({ metadata: true, extensions: ["public-url"] });
  converter.setFlavor("github");
  const body = converter.makeHtml(fileContent);
  const rawMetadata = converter.getMetadata(true);
  const metadata = jsYaml.safeLoad(rawMetadata);
  const image = metadata.image || null;
  const publishedAt = metadata.publishedAt ? new Date(metadata.publishedAt) : new Date();
  const slug = metadata.slug || dir;
  const title = metadata.title || slug;
  const entry = { ...metadata, basePath, body, image, publishedAt, slug, title };

  return Promise.resolve(entry);
}
