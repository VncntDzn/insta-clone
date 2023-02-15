import { Stories } from "features";
import { Activities, Header, ProfileTabs, Settings } from "features/profile";
import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";
import styles from "scss/pages/profile.module.scss";
const Profile = () => {
  return (
    <div className={styles.root}>
      <Settings />
      <Header />
      <Stories />
      <Activities />
      <ProfileTabs />
    </div>
  );
};

Profile.getLayout = (page: ReactElement) => {
  return <PrivateLayout title="Profile">{page}</PrivateLayout>;
};
export default Profile;
