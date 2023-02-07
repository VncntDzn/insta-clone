import { firestore } from "db/client";
import { collection, getDocs, query } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import styles from "./posts.module.scss";

const Posts = () => {
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
  return (
    <div className={styles.root}>
      {/* TODO: Add infinite scroll */}
      {posts.map((post, i) => (
        <div className={styles.container} key={i}>
          <Image alt={post} src={post.imageURL[0]} fill />
        </div>
      ))}
    </div>
  );
};

export default Posts;
