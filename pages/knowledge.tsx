import { BottomNav, Footer, Header } from 'src/components';
import KnowledgeList from 'src/components/Knowledge/KnowledgeList';
import 'src/components/styles/global.css'



const Knowledge = () => {
  return (
    <>
      <Header />
      <KnowledgeList />
      <Footer />
      <BottomNav />
    </>
  );
};

export default Knowledge;