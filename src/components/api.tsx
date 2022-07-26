import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";



export const getSlugs = (ss: any): string[] => {
  const POSTS_PATH = path.join(process.cwd(), `posts/${ss}`);
  const paths = sync(`${POSTS_PATH}/*.mdx`);
  // console.log(paths, "mmmmmmmmmm");
  // console.log(process.cwd());
  // console.log(path.join(process.cwd(), "hhhhhhh"));

  return paths.map(path => {
    const parts = path.split("/")
    // console.log(parts);
    const fileName = parts[parts.length - 1]
    // console.log(fileName);
    const [slug, _ext] = fileName.split('.')
    return slug
  })
};

export const getAllPosts = (ss: any) => {
  // console.log(getSlugs());
  const posts = getSlugs(ss)
    .map((slug) => getPostFromSlug(slug, ss)).sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    })
    .reverse();
  return posts;
};


interface Post {
  content: string;
  meta: PostMeta;
}

export interface PostMeta {
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
  name: string;
  imgUrl: string;
  id?: string;
  // story?: number;
  // socialEffect?: number;
  // businessSuccessful?: number;
  // innovative?: number;
  // music?: number;
  // images?: number;
}

export const getPostFromSlug = (slug: string, ss: string): Post => {
  const POSTS_PATH = path.join(process.cwd(), `posts/${ss}`);
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);
  // console.log({ content, data }, "yyyyyyyyy");
  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? "",
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
      name: data.name ?? slug,
      imgUrl: data.imgUrl ?? "/images/black.png",
      id: data.id ?? slug,
      // story: data.story,
      // socialEffect: data.socialEffect ?? 1,
      // businessSuccessful: data.businessSuccessful ?? 1,
      // innovative: data.innovative ?? 1,
      // music: data.music ?? 1,
      // images: data.images ?? 1
    },
  };
};