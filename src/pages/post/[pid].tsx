import { PostsHeader } from "features/posts";
import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";
import styles from "scss/pages/post.module.scss";
const Post = () => {
  return (
    <div className={styles.root}>
      <PostsHeader />
      <h1>hello</h1>
    </div>
  );
};

Post.getLayout = (page: ReactElement) => {
  return <PrivateLayout title="Post">{page}</PrivateLayout>;
};
export default Post;
