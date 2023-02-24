import styles from "./comments.module.scss";
const Comments = () => {
  return (
    <div className={styles.root}>
      <h2>No comments yet.</h2>
      <span>Start the conversation.</span>
    </div>
  );
};

export default Comments;
