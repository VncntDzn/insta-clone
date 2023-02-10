import { Header, Settings } from "features/profile";
import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";
import styles from "scss/pages/profile.module.scss";
const Profile = () => {
  return (
    <div className={styles.root}>
      <Settings />
      <Header />
      {/*  <div>
        <PersonalStories />
      </div> */}
      {/* <ProfileTabs /> */}
      {/* <Activities /> */}
      {/*  
      <Header />
    
      <Activities />
      <ProfileTabs /> */}
      {/*    <Posts /> */}
    </div>
  );
};

Profile.getLayout = (page: ReactElement) => {
  return <PrivateLayout title="Profile">{page}</PrivateLayout>;
};
export default Profile;
