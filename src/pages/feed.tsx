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
import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import PrivateLayout from "layouts/private-layout";
import { Fragment, ReactElement, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "scss/pages/feed.module.scss";
import { useAppSelector } from "store/hooks";
import moment from "moment";
import ContentLoader from "react-content-loader";

interface Post {
  displayName: string;
  uid: string;
  userPhoto: string;
  postURL: string;
  timestamp: moment.Moment;
}
const Feed = () => {
  const currentUser = useAppSelector((state) => state.user.user);
  const [posts, setPosts] = useState<DocumentData[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [hasFollowing, setHasFollowing] = useState(false);

  const fetchFollowingPosts = async (uid: string) => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(
        query(
          collection(firestore, `posts/${uid}/post`),
          orderBy("timestamp", "desc")
        )
      );

      // This code creates a new array by copying its data and modifying the timestamp value to return moment date.
      const result = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        timestamp: moment(doc.data().timestamp.toDate()),
      }));
      return result;
    } catch (error) {
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const queryCollection = query(
          collection(firestore, `following/${currentUser?.uid}/users`)
        );
        const querySnapshot = await getDocs(queryCollection);
        const docsArray = querySnapshot.docs.map((doc) =>
          fetchFollowingPosts(doc.data().uid)
        );
        // Promise.all is waiting for all the docsArray to be returned before doing anything.
        const posts = await Promise.all(docsArray);

        // The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
        const flattenedPosts = posts.flat(); // concatenate posts from all users
        flattenedPosts.map(({ uid }) => {
          if (uid !== currentUser?.uid) {
            setHasFollowing(true);
          }
          setHasFollowing(false);
        });
        const sortedPosts = flattenedPosts.sort(
          (a, b) => Number(b.timestamp) - Number(a.timestamp)
        ); // sort by timestamp
        setPosts(sortedPosts);
      } catch (error) {
        toast.error("Error fetching posts");
      }
    })();
  }, []);

  // Display only if the 0 following and no posts yet.
  if (!hasFollowing && posts.length === 0) {
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

  if (isLoading) {
    return [1, 2, 3].map((i) => (
      <ContentLoader
        speed={2}
        width={400}
        height={860}
        viewBox="0 0 400 860"
        backgroundColor="#e0e0e0"
        foregroundColor="#ecebeb"
        key={i}
      >
        <circle cx="31" cy="31" r="15" />
        <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
        <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
        <rect x="-106" y="61" rx="2" ry="2" width="1164" height="590" />
      </ContentLoader>
    ));
  }

  /*
    TODO:
    1. Create an infinite scroll here
  */
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
                <PostsHeader
                  name={post.displayName}
                  uid={post.uid}
                  userPhoto={post.userPhoto}
                />
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
