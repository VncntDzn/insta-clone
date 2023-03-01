import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri";
import styles from "./page-header.module.scss";

interface PageHeaderProps {
  title: string;
}
const PageHeader = ({ title }: PageHeaderProps) => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <section className={styles.root}>
      <RiArrowLeftSLine onClick={handleGoBack} size={35} />
      <strong className={styles.title}>{title}</strong>
    </section>
  );
};

export default PageHeader;
