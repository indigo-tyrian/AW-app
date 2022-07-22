import { BottomNav, Footer, Header } from 'src/components';
import KnowledgeList from 'src/components/Knowledge/KnowledgeList';
import 'src/components/styles/global.css'
import { getAllPosts, PostMeta } from "src/components/api";


const Knowledge = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <>
      <Header />
      <KnowledgeList posts={posts} />
      <Footer />
      <BottomNav />
    </>
  );
};

export default Knowledge;

export async function getStaticProps() {
  const posts = getAllPosts("/knowledge/")
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}