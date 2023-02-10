import { firestore } from "db/client";
import { FeedHeader } from "features/feed";
import { collection, getDocs, query } from "firebase/firestore";
import PrivateLayout from "layouts/private-layout";
import { ReactElement, useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import { NextPageWithLayout } from "./_app";

const Feed: NextPageWithLayout = () => {
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
      <FeedHeader />
      {/*  <Stories />
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
