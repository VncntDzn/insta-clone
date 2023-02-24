import InfinitePost from "features/posts/post/infinite-scroll";
import {
  RiAccountBoxLine,
  RiBookmarkLine,
  RiGridLine,
  RiVideoLine,
} from "react-icons/ri";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import styles from "./tabs.module.scss";
const ProfileTabs = () => {
  return (
    <Tabs
      className={styles.root}
      selectedTabClassName={styles.selectedTabClassName}
    >
      <TabList className={styles.tabList}>
        <Tab className={styles.tab}>
          <RiGridLine size={25} />
          <strong className={styles.tabName}>POSTS</strong>
        </Tab>
        <Tab className={styles.tab}>
          <RiVideoLine size={25} />{" "}
          <strong className={styles.tabName}>REELS</strong>
        </Tab>
        <Tab className={styles.tab}>
          <RiBookmarkLine size={25} />
          <strong className={styles.tabName}>SAVED</strong>
        </Tab>
        <Tab className={styles.tab}>
          <RiAccountBoxLine size={25} />{" "}
          <strong className={styles.tabName}>TAGGED</strong>
        </Tab>
      </TabList>

      <TabPanel>
        <InfinitePost />
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 4</h2>
      </TabPanel>
    </Tabs>
  );
};

export default ProfileTabs;
