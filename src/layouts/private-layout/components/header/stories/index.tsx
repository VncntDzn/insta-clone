import styles from "./stories.module.scss";
const Stories = () => {
  return (
    <div className={styles.root}>
      {[
        "Vincent",
        "Angela Nicole Angela Nicole Angela Nicole",
        "Vincent",
        "Angela Nicole",
        "Vincent",
        "Angela Nicole",
        "Vincent",
        "Angela Nicole",
        "Vincent",
        "Angela Nicole",
        "Vincent",
        "Angela Nicole",
      ].map((name, i) => (
        <div className={styles.story} key={i}>
          <div className={styles.avatar} />
          <p className={styles.name}>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
