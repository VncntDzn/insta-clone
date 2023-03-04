import { firestore } from "db/client";
import { Stories } from "features";
import { FeedHeader } from "features/feed";
import { collection, getDocs, query } from "firebase/firestore";
import PrivateLayout from "layouts/private-layout";
import { ReactElement, useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import { NextPageWithLayout } from "./_app";
import styles from "scss/pages/feed.module.scss";
import Recommendations from "features/recommendations";
const Feed: NextPageWithLayout = () => {
  const user = useAppSelector((state) => state.user.user);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async function fetchPosts() {
      try {
        const result: any = [];
        const queryCollection = query(
          collection(firestore, `posts/${user?.uid}/post`)
        );
        const querySnapshot = await getDocs(queryCollection);

        querySnapshot.forEach((doc) => {
          result.push(doc.data());
        });

        setPosts(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user?.uid]);

  if (true) {
    return (
      <div className={styles.recommendationsContainer}>
        <FeedHeader />
        <Recommendations />
      </div>
    );
  }
  return (
    <div className={styles.root}>
      <FeedHeader />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.stories}>
            <Stories />
          </div>
          <div>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
          </div>
        </div>
        <div className={styles.recommendation}>
          <h1>Recommendations</h1>
        </div>
      </div>
      {/*   <div style={{   border: "3px solid yellow" }}>
        <Stories />
      </div> */}
      {/* 
      <Carousel showThumbs={false} showStatus={false}>
        {posts.map((post, i) => (
          <section key={i}>
            {post.imageURL.map((img) => (
              <Image alt={post} src={img} fill />
            ))}
            <h1> {post.caption}</h1>
          </section>
        ))}
      </Carousel> */}
    </div>
  );
};

Feed.getLayout = (page: ReactElement) => {
  return <PrivateLayout>{page}</PrivateLayout>;
};
export default Feed;
