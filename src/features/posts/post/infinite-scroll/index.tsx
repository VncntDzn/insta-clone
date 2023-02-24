import { Dialog } from "common";
import { firestore } from "db/client";
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
import ContentLoader, { Facebook } from "react-content-loader";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import InfiniteScroll from "react-infinite-scroll-component";
import { toast } from "react-toastify";
import { useAppSelector } from "store/hooks";
import DialogPost from "../dialog";
import styles from "./posts.module.scss";
interface PostURL {
  url: string;
  metadata: string[];
}
interface PostContentType {
  data: {
    postURL: PostURL[];
  };
}

const InfinitePosts = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user.user);
  const isLargeScreen = useMediaQuery("(min-width: 802px)");
  const [togglePost, setTogglePost] = useState(false);
  const [post, setPost] = useState<DocumentData | undefined>(undefined);
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const fetchPosts = useCallback(async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
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
  useEffect(() => {
    if (user?.uid) {
      fetchPosts();
    }
  }, [user?.uid, fetchPosts]);

  if (isLoading) {
    return (
      <ContentLoader
        speed={2}
        width="100%"
        height={860}
        viewBox="0 0 400 860"
        backgroundColor="#e0e0e0"
        foregroundColor="#ecebeb"
      >
        <circle cx="31" cy="31" r="15" />
        <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
        <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
        <rect x="2" y="108" rx="2" ry="2" width="516" height="590" />
      </ContentLoader>
    );
  }
  return (
    <>
      <Dialog isOpen={togglePost} onClose={() => setTogglePost(false)}>
        {post && <DialogPost postURL={post.postURL} />}
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
        {posts.map((post: PostContentType, i) => (
          <div
            onClick={() => handleNavigateToPost(post)}
            className={styles.container}
            key={i}
          >
            {post.data.postURL.length > 1 && (
              <RiCheckboxMultipleBlankLine
                className={styles.multipleIcon}
                size={20}
              />
            )}
            {post.data.postURL[0].metadata.includes("video") ? (
              <video
                style={{
                  height: "100%",
                  width: "100%",
                  textAlign: "center",
                }}
                controls
                src={post.data.postURL[0].url}
              />
            ) : (
              <Image alt="" src={post.data.postURL[0].url} fill />
            )}
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default memo(InfinitePosts);
