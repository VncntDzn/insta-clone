import { firestore } from "db/client";
import {
  PostComments,
  PostContent,
  PostInteraction,
  PostsHeader,
} from "features/posts";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import PrivateLayout from "layouts/private-layout";
import { useRouter } from "next/router";
import { memo, ReactElement, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "scss/pages/post.module.scss";
import { useAppSelector } from "store/hooks";

const Post = () => {
  const { query } = useRouter();
  const user = useAppSelector((state) => state.user.user);
  const [post, setPost] = useState<DocumentData | undefined>(undefined);

  const fetchPost = useCallback(async () => {
    try {
      const res = await doc(firestore, `posts/${user!.uid}/post/${query.pid}`);
      const docSnap = await getDoc(res);

      setPost(docSnap.data());
    } catch (error) {
      toast.error("Error loading post.");
    }
  }, [query.pid, user]);

  useEffect(() => {
    if (user?.uid) {
      fetchPost();
    }
  }, [user, fetchPost]);

  return (
    <div className={styles.root}>
      {post && (
        <>
          <PostsHeader />
          <div className={styles.post}>
            <PostContent data={post.postURL} />
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
export default memo(Post);
