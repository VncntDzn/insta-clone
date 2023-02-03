import { firestore } from "db/client";
import { collection, getDocs, query } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
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
    <div>
      <Carousel showThumbs={false} showStatus={false}>
        {posts.map((post, i) => (
          <section key={i}>
            {post.imageURL.map((img) => (
              <Image alt={post} src={img} fill />
            ))}
            <h1> {post.caption}</h1>
          </section>
        ))}
      </Carousel>
    </div>
  );
};

export default Posts;
