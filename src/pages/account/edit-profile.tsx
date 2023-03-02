import { PageHeader } from "common";
import { AccountLayout, EditProfileForm } from "features/account";
import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";

const EditProfile = () => {
  return (
    <AccountLayout>
      <PageHeader title="Edit Profile" />
      <EditProfileForm />
    </AccountLayout>
  );
};

EditProfile.getLayout = (page: ReactElement) => {
  return <PrivateLayout title="Edit Profile">{page}</PrivateLayout>;
};
export default EditProfile;
