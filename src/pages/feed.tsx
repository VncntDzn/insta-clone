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
import { collection, DocumentData, getDocs, query } from "firebase/firestore";
import PrivateLayout from "layouts/private-layout";
import { Fragment, ReactElement, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "scss/pages/feed.module.scss";
import { useAppSelector } from "store/hooks";
import { NextPageWithLayout } from "./_app";
const Feed: NextPageWithLayout = () => {
  const currentUser = useAppSelector((state) => state.user.user);
  const [posts, setPosts] = useState<DocumentData[]>([]);

  const fetchFollowingPosts = async (uid: string) => {
    try {
      const querySnapshot = await getDocs(
        collection(firestore, `posts/${uid}/post`)
      );
      const result = querySnapshot.docs.map((doc) => doc.data());
      setPosts((prevVal) => [...prevVal, ...result]);
    } catch (error) {
      toast.error("Error fetching posts");
    }
  };

  useEffect(() => {
    (async function fetchFollowingUsers() {
      try {
        const queryCollection = query(
          collection(firestore, `following/${currentUser!.uid}/users`)
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
      <div className={styles.recommendationsRoot}>
        <FeedHeader />
        <div className={styles.recommendationsContainer}>
          <p className={styles.suggestionHeader}>Suggestions for you</p>{" "}
          <Recommendations />
        </div>
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
          <strong className={styles.suggestionHeader}>
            Suggestions for you
          </strong>
          <Recommendations />
        </div>
      </div>
    </div>
  );
};

Feed.getLayout = (page: ReactElement) => {
  return <PrivateLayout>{page}</PrivateLayout>;
};
export default Feed;
