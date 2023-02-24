import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import styles from "./post.module.scss";

interface PostImageProps {
  images: string[];
}
const Post = ({ images }: PostImageProps) => {
  return (
    <Carousel
      className={styles.root}
      showThumbs={false}
      showStatus={false}
      showIndicators={images.length > 1 ? true : false}
    >
      {images.map((image, i) => (
        <section key={i} className={styles.image}>
          <Image alt="post" src={image} fill />
        </section>
      ))}
    </Carousel>
  );
};

export default Post;
