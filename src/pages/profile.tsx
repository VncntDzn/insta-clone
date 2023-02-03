import {
  Activities,
  Header,
  PersonalStories,
  Posts,
  ProfileTabs,
  Settings,
} from "features/profile";
import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";

const Profile = () => {
  return (
    <div>
      <Settings />
      <Header />
      <PersonalStories />
      <Activities />
      <ProfileTabs />
      {/*    <Posts /> */}
    </div>
  );
};

Profile.getLayout = (page: ReactElement) => {
  return <PrivateLayout title="Profile">{page}</PrivateLayout>;
};
export default Profile;
