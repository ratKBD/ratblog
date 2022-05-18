import classes from "./blogItem.module.css";
import Image from "next/image";
import Link from "next/link";
const BlogItem = (props) => {
  const { title, image, published, author, alt, slug } = props;

  const readableDate = new Date(published).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const exploreDetails = `/${slug}`;

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <Image src={image} alt={alt} width="400px" height="300px" />

        <Link key={slug} href={exploreDetails}>
          <h1 className={classes.title}> {title}</h1>
        </Link>

        {/* <button link={exploreDetails}>click me</button> */}
        <div className={classes.align}>
          <h4>{author} |</h4>
          <h4>{readableDate}</h4>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
