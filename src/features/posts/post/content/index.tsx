import Image from "next/image";
import { Fragment } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./post.module.scss";
import { PostContentType } from "./post.types";


const PostContent = ({ data }: PostContentType) => {
  return (
    <Carousel
      className={styles.root}
      showThumbs={false}
      showStatus={false}
      showIndicators={Object.values(data).length > 1 ? true : false}
    >
      {Object.values(data).map(({ metadata, url }, i: number) => (
        <Fragment key={i}>
          {metadata.includes("video") ? (
            <video className={styles.video} controls src={url} />
          ) : (
            <section className={styles.image}>
              <Image alt="post" src={url} fill />
            </section>
          )}
        </Fragment>
      ))}
    </Carousel>
  );
};

export default PostContent;
