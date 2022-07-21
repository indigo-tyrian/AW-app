import Link from "next/link";
import { PostMeta } from "src/components/api";

// import styles from "@/styles/Articles.module.css";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul >
      {posts.map((post) => (
        <li key={post.slug}>
          <div >
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </div>
          <p>{post.excerpt}</p>
          <p >
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
}