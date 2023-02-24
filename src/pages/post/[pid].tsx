import { firestore } from "db/client";
import {
  PostComments,
  PostImage,
  PostInteraction,
  PostsHeader,
} from "features/posts";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import PrivateLayout from "layouts/private-layout";
import { useRouter } from "next/router";
import { ReactElement, useCallback, useEffect, useState } from "react";
import styles from "scss/pages/post.module.scss";
import { useAppSelector } from "store/hooks";
const Post = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user.user);
  const [post, setPost] = useState<DocumentData | undefined>(undefined);
  const fetchPost = useCallback(async () => {
    try {
      const res = await doc(
        firestore,
        `posts/${user!.uid}/post/${router.query.pid}`
      );
      const docSnap = await getDoc(res);

      setPost(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  }, [router.query.pid, user]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return (
    <div className={styles.root}>
      {post && (
        <>
          <PostsHeader />
          <div className={styles.post}>
            <PostImage images={post.imageURL} />
            <div className={styles.interactions}>
              <PostInteraction />
              <PostComments />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Post.getLayout = (page: ReactElement) => {
  return <PrivateLayout title="Post">{page}</PrivateLayout>;
};
export default Post;
