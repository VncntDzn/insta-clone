import { PageTitle } from "common";
import Navbar from "layouts/navbar";
import { ChildrenType } from "types";
import styles from "./public-layout.module.scss";

const PublicLayout = ({ children }: ChildrenType) => {
  return (
    <main className={styles.root}>
      <PageTitle />
      <Navbar />
      {children}
    </main>
  );
};

export default PublicLayout;
