import classes from "./slugItem.module.css";
import Image from "next/image";

const SlugItem = (props) => {
  const { title, image, published, author, alt, teaser, content } = props;
  const readableDate = new Date(published).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <div>
        <h1 className={classes.title}>{title}</h1>
        <Image
          className={classes.blogImg}
          src={image}
          alt={alt}
          width="907px"
          height="500px"
        />
        <div className={classes.detail}>
          <h4>{author} </h4>
          <h4>{readableDate}</h4>
        </div>
        <h1 className={classes.title}>{teaser}</h1>

        <div></div>
      </div>
    </div>
  );
};

export default SlugItem;
