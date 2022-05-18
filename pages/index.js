import BlogList from "../components/bloglist";
import Header from "../components/header";
import { getAllItems } from "../helper/helper-util";

const HomePage = (props) => {
  return (
    <div>
      <Header />
      <div>
        <BlogList items={props.items} />
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
