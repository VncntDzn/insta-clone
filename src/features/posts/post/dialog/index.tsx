import { PostComments, PostInteractions } from "features/posts";
import PostsHeader from "features/posts/header";
import { memo } from "react";
import { RiEmotionHappyLine } from "react-icons/ri";
import PostContent from "../content";
import styles from "./dialog-post.module.scss";

const DialogPost = ({ postURL }) => {
  return (
    <div className={styles.root}>
      <PostsHeader />
      <div className={styles.post}>
        <PostContent data={postURL} />
        <div className={styles.interactions}>
          <div>
            <PostInteractions />
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
};

export default memo(DialogPost);
