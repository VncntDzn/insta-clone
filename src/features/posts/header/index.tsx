import Avatar from "common/avatar";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RxDotsHorizontal } from "react-icons/rx";
import styles from "./header.module.scss";

const PostsHeader = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <section className={styles.root}>
      <div className={styles.header}>
        <RiArrowLeftSLine onClick={handleGoBack} size={35} />
        <strong className={styles.title}>Photo</strong>
      </div>
      <div className={styles.user}>
        <div className={styles.avatar}>
          <Avatar height={40} width={40} />
        </div>
        <div className={styles.name}>
          <strong>vincent.tsx</strong>
          <small>Location...</small>
        </div>
        <RxDotsHorizontal className={styles.dotIcon} size={20} />
      </div>
    </section>
  );
};

export default PostsHeader;
