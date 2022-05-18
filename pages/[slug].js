import SlugList from "../components/slugList";

const BlogDetail = (props) => {
  return (
    <div>
      <SlugList items={props.slugValue} />
    </div>
  );
};

export async function getStaticPaths() {
  const items = await fetch(
    "https://cms.dev.youverify.co/blogs?_start=0&_limit=90&_sort=createdAt:DESC"
  );
  const blogs = await items.json();

  return {
    paths: blogs.map((blog) => ({
      params: { slug: blog.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://cms.dev.youverify.co/blogs/?slug=${params.slug}`
  );
  const blogData = await res.json();

  return {
    props: {
      slugValue: blogData,
    },
    revalidate: 10,
  };
}

export default BlogDetail;
