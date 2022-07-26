import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
// import rehypeSlug from "rehype-slug";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import rehypeHighlight from "rehype-highlight";
import { getPostFromSlug, getSlugs, PostMeta } from "src/components/api";
import YouTube from "src/components/youTube";
import Head from 'next/head'
import EachContent from "src/components/LivingThings/eachContent";
import EachContentNoImageGarelly from "src/components/LivingThings/eachContentNoImageGarelly";
import { useRouter } from 'next/router'

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {

  const router = useRouter()
  const one = router.asPath.replace("/livingThings/each/", "")
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <EachContent id={one} />
      {/* <h1 style={{ color: "red" }}>{post.meta.title}</h1> */}
      <MDXRemote {...post.source} components={{ YouTube, Image, }} />

    </>
  );
}





export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug, "/livingThings/each/");
  const mdxSource = await serialize(content, {
    // mdxOptions: {
    //   rehypePlugins: [
    //     rehypeSlug,
    //     [rehypeAutolinkHeadings, { behavior: "wrap" }],
    //     rehypeHighlight,
    //   ],
    // },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs("/livingThings/each/").map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};