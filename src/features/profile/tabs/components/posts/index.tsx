import { Dialog } from "common";
import { firestore } from "db/client";
import {
  PostComments,
  PostImage,
  PostInteraction,
  PostsHeader,
} from "features/posts";
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { useMediaQuery } from "hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import { memo, useCallback, useEffect, useState } from "react";
import {
  RiCheckboxMultipleBlankLine,
  RiEmotionHappyLine,
} from "react-icons/ri";
import InfiniteScroll from "react-infinite-scroll-component";
import { toast } from "react-toastify";
import { useAppSelector } from "store/hooks";
import styles from "./posts.module.scss";
const Posts = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user.user);
  const isLargeScreen = useMediaQuery("(min-width: 802px)");
  const [togglePost, setTogglePost] = useState(false);
  const [post, setPost] = useState<DocumentData | undefined>(undefined);
  const [posts, setPosts] = useState([]);

  const fetchPosts = useCallback(async () => {
    try {
      const result: any = [];
      const queryCollection = query(
        collection(firestore, `posts/${user!.uid}/post`)
      );
      const querySnapshot = await getDocs(queryCollection);

      querySnapshot.forEach((doc) => {
        /*
          gets the document id, alongside with data.
          While pushing it to result array.
        */
        result.push({ id: doc.id, data: doc.data() });
      });

      setPosts(result);
    } catch (error) {
      toast.error("Something went wrong");
    }
  }, [user]);
  const fetchPostImage = useCallback(
    async ({ id }: { id: string }) => {
      try {
        const postDoc = await doc(firestore, `posts/${user!.uid}/post/${id}`);
        const postSnap = await getDoc(postDoc);

        setPost(postSnap.data());
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
    [user]
  );

  const handleNavigateToPost = ({ id }: { id: string }) => {
    if (isLargeScreen) {
      setTogglePost(true);
      fetchPostImage({ id });
    } else {
      router.push(`post/${id}`);
    }
  };

  // Display only if you have post data
  const renderPostDialog = () => {
    if (post) {
      return (
        <div className={styles.dialog}>
          <PostsHeader />
          <div className={styles.post}>
            <PostImage images={post.imageURL} />
            <div className={styles.interactions}>
              <div>
                <PostInteraction />
                <div className={styles.commentArea}>
                  <RiEmotionHappyLine size={30} />
                  <textarea
                    autoComplete="off"
                    aria-label="Write a comment..."
                    placeholder="Write a comment..."
                    className={styles.textArea}
                    maxLength={2000}
                  />
                </div>
              </div>
              <PostComments />
            </div>
          </div>
        </div>
      );
    }
  };
  useEffect(() => {
    if (user?.uid) {
      fetchPosts();
    }
  }, [user?.uid, fetchPosts]);
  return (
    <>
      <Dialog isOpen={togglePost} onClose={() => setTogglePost(false)}>
        {renderPostDialog()}
      </Dialog>

      <InfiniteScroll
        className={styles.root}
        dataLength={posts.length} //This is important field to render the next data
        next={fetchPosts}
        hasMore={false}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {posts.map((post, i) => (
          <div
            onClick={() => handleNavigateToPost(post)}
            className={styles.container}
            key={i}
          >
            {post.data.imageURL.length > 1 && (
              <RiCheckboxMultipleBlankLine
                className={styles.multipleIcon}
                size={20}
              />
            )}
            <Image alt={post} src={post.data.imageURL[0]} fill />
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default memo(Posts);
