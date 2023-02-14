import {
  RiAccountBoxLine,
  RiBookmarkLine,
  RiGridLine,
  RiVideoLine,
} from "react-icons/ri";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Posts from "./components/posts";

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
        </Tab>
        <Tab className={styles.tab}>
          <RiVideoLine size={25} />
        </Tab>
        <Tab className={styles.tab}>
          <RiBookmarkLine size={25} />
        </Tab>
        <Tab className={styles.tab}>
          <RiAccountBoxLine size={25} />
        </Tab>
      </TabList>

      <TabPanel>
        <Posts />
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
