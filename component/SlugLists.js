import SlugItem from "../component/SlugItems";

const SlugList = (props) => {
  const { items } = props;
  return (
    <div>
      {items?.map((item) => (
        <SlugItem
          key={item.id}
          id={item.id}
          title={item.title}
          teaser={item.teaser}
          author={item.author}
          published={item.published_at}
          image={item.image.url}
          alt={item.image.alternativeText}
        />
      ))}
    </div>
  );
};

export default SlugList;
