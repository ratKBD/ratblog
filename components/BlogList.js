import BlogItem from "./blogItem";

const BlogList = (props) => {
  const { items } = props;
  return (
    <div>
      {items.map((item) => (
        <BlogItem
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

export default BlogList;
