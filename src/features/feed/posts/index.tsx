import { PostContent, PostInteractions, PostsHeader } from "features/posts";
import styles from "./feed-posts.module.scss";

const FeedPosts = ({ posts }) => {
  return (
    <div className={styles.root}>
      {posts.map((post, i) => (
        <div key={i}>
          <PostsHeader
            name={post.displayName}
            uid={post.uid}
            userPhoto={post.userPhoto}
            location={post.location}
          />
          <div className={styles.post}>
            <PostContent data={post.postURL} />
            <div className={styles.interactions}>
              <PostInteractions
                name={post.displayName}
                caption={post.caption}
              />
              {/* <PostComments /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedPosts;
