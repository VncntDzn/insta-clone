import { firestore } from "db/client";
import { collection, getDocs, query } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppSelector } from "store/hooks";
import styles from "./posts.module.scss";
const Posts = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user.user);

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const result: any = [];
      const queryCollection = query(
        collection(firestore, `posts/${user?.uid}/post`)
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
      console.log(error);
    }
  };

  const handleNavigateToPost = (post) => {
    router.push(`post/${post.id}`);
  };
  useEffect(() => {
    fetchPosts();
  }, [user?.uid]);
  return (
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
  );
};

export default memo(Posts);
