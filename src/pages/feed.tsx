import { firestore } from "db/client";
import { Stories } from "features";
import { FeedHeader } from "features/feed";
import {
  PostComments,
  PostContent,
  PostInteraction,
  PostsHeader,
} from "features/posts";
import Recommendations from "features/recommendations";
import { collection, getDocs, query } from "firebase/firestore";
import PrivateLayout from "layouts/private-layout";
import {
  Fragment,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import styles from "scss/pages/feed.module.scss";
import { useAppSelector } from "store/hooks";
import { NextPageWithLayout } from "./_app";
const Feed: NextPageWithLayout = () => {
  const user = useAppSelector((state) => state.user.user);

  const [posts, setPosts] = useState([]);
  const fetchFollowingPosts = async (uid) => {
    try {
      const querySnapshot = await getDocs(
        collection(firestore, `posts/${uid}/post`)
      );
      const result = querySnapshot.docs.map((doc) => doc.data());

      setPosts((x) => [...x, ...result]);
    } catch (error) {
      toast.error("Error fetching posts");
    }
  };

  useEffect(() => {
    (async function fetchFollowingUsers() {
      try {
        const queryCollection = query(
          collection(firestore, `following/${user!.uid}/users`)
        );

        const querySnapshot = await getDocs(queryCollection);
        querySnapshot.forEach((doc) => {
          fetchFollowingPosts(doc.data().uid);
        });
      } catch (error) {
        toast.error("Error fetching posts");
      }
    })();
  }, []);
  if (false) {
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
            {posts.map((post, i) => (
              <Fragment key={i}>
                <PostsHeader />
                <div className={styles.post}>
                  <PostContent data={post.postURL} />
                  <div className={styles.interactions}>
                    <PostInteraction />
                    <PostComments />
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
        <div className={styles.recommendation}>
          <Recommendations />
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
