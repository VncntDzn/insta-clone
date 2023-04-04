import { SkeletonLoader } from "common";
import { firestore } from "db/client";
import { Stories } from "features";
import {
  PostComments,
  PostContent,
  PostInteractions,
  PostsHeader,
} from "features/posts";
import Recommendations from "features/recommendations";
import {
  DocumentData,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import PrivateLayout from "layouts/private-layout";
import moment from "moment";
import { ReactElement, useEffect, useState } from "react";
import { RiHeartLine, RiInstagramLine } from "react-icons/ri";
import { toast } from "react-toastify";
import styles from "scss/pages/feed.module.scss";
import { useAppSelector } from "store/hooks";

interface Post {
  displayName: string;
  uid: string;
  userPhoto: string;
  postURL: string;
  timestamp: moment.Moment;
}

const FeedHeader = () => {
  return (
    <div className={styles.header}>
      <RiInstagramLine className={styles.logo} size={30} />
      <input placeholder="Search" className={styles.search} />
      <div className={styles.notifications}>
        <RiHeartLine size={30} />
      </div>
    </div>
  );
};

const FeedComments = () => {
  return (
    <div className={styles.comment}>
      <small>View all 70 comments</small>
      <textarea className={styles.commentBox} placeholder="add a comment..." />
      <button className={styles.commentBtn}>Post</button>
    </div>
  );
};

const FeedPosts = ({ posts }) => {
  return (
    <div className={styles.posts}>
      {posts.map((post, i) => (
        <div key={i}>
          <PostsHeader
            name={post.displayName}
            uid={post.uid}
            userPhoto={post.userPhoto}
            location={post.location}
          />
          <div className={styles.post}>
            <PostContent data={post.postURL} />
            <div className={styles.interactions}>
              <PostInteractions
                name={post.displayName}
                caption={post.caption}
              />
              <FeedComments />
              {/* <PostComments /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
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
      flattenedPosts.map((uid) => {
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

  // Display only if 0 following, not loading and no posts yet.
  if (!hasFollowing && posts.length === 0 && !isLoading) {
    return (
      <>
        <FeedHeader />
        <Recommendations />
      </>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.skeletonLoader}>
        {[1, 2, 3].map((i) => (
          <SkeletonLoader key={i} />
        ))}
      </div>
    );
  }

  /*
    TODO:
    1. Create an infinite scroll here
    2. Create a header
  */
  return (
    <div className={styles.root}>
      <FeedHeader />
      <div className={styles.feed}>
        <div className={styles.content}>
          <div className={styles.stories}>
            <Stories />
          </div>
          <FeedPosts posts={posts} />
        </div>
        <div className={styles.recommendation}>
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
