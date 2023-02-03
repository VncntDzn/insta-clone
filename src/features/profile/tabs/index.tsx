import {
  RiAccountBoxLine,
  RiBookmarkLine,
  RiGridLine,
  RiVideoLine,
} from "react-icons/ri";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Posts from "../posts";
const ProfileTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <RiGridLine size={25} />
        </Tab>
        <Tab>
          <RiVideoLine size={25} />
        </Tab>
        <Tab>
          <RiBookmarkLine size={25} />
        </Tab>
        <Tab>
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
