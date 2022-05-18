import BlogLists from "../component/BlogLists";
import Header from "../component/header";
import { getAllItems } from "../helper/helper-util";

const HomePage = (props) => {
  return (
    <div>
      <Header />
      <div>
        <BlogLists items={props.items} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const allItems = await getAllItems();

  return {
    props: {
      items: allItems,
    },
    revalidate: 10,
  };
}

export default HomePage;
