import BlogItems from "./BlogItems";

const BlogLists = (props) => {
  const { items } = props;
  return (
    <div>
      {items.map((item) => (
        <BlogItems
          key={item.id}
          id={item.id}
          title={item.title}
          author={item.author}
          published={item.published_at}
          image={item.image.url}
          alt={item.image.alternativeText}
          slug={item.slug}
        />
      ))}
    </div>
  );
};

export default BlogLists;
