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
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import PrivateLayout from "layouts/private-layout";
import { Fragment, ReactElement, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "scss/pages/feed.module.scss";
import { useAppSelector } from "store/hooks";
import moment from "moment";
import ContentLoader from "react-content-loader";
import { SkeletonLoader } from "common";
import { FadeLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";

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

  const fetchPosts = async (uid: string) => {
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
  const fetchFollowingUsers = async () => {
    try {
      const queryCollection = query(
        collection(firestore, `following/${currentUser?.uid}/users`)
      );
      const querySnapshot = await getDocs(queryCollection);
      const docsArray = querySnapshot.docs.map((doc) =>
        fetchPosts(doc.data().uid)
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
  };

  useEffect(() => {
    fetchFollowingUsers();
  }, []);

  // Display only if the 0 following and no posts yet.
  if (!hasFollowing && posts.length === 0 && !isLoading) {
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
    return (
      <>
        <div className={styles.root}>
          <FeedHeader />
          <div className={styles.container}>
            <div className={styles.content}>
              {[1, 2, 3].map((i) => (
                <SkeletonLoader key={i} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  const renderPosts = () => {
    return (
      <>
        {posts.length}
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
      </>
    );
  };

  /*
    TODO:
    1. Create an infinite scroll here
    2. Create a header
  */
  return (
    <div className={styles.root}>
      <FeedHeader />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.stories}>
            <Stories />
          </div>
          <div>{renderPosts()}</div>
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
