import { useRef } from "react";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import styles from "./stories.module.scss";
const Stories = () => {
  const horizontalScrollRef = useRef(null);
  const handleScrollHorizontal = (direction: "right" | "left") => {
    if (horizontalScrollRef.current) {
      if (direction === "right") {
        (horizontalScrollRef.current as HTMLElement).scrollLeft += 100;
      } else {
        (horizontalScrollRef.current as HTMLElement).scrollLeft -= 100;
      }
    }
  };
  return (
    <>
      <RiArrowLeftSFill
        size={30}
        className={styles.arrowLeft}
        onClick={() => handleScrollHorizontal("left")}
      />
      <RiArrowRightSFill
        className={styles.arrowRight}
        size={30}
        onClick={() => handleScrollHorizontal("right")}
      />

      <div className={styles.root}>
        <div className={styles.container} ref={horizontalScrollRef}>
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
      </div>
    </>
  );
};

export default Stories;
