import { AccountLayout } from "features/account";
import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";

const EditProfile = () => {
  return <AccountLayout>EditProfile</AccountLayout>;
};

EditProfile.getLayout = (page: ReactElement) => {
  return <PrivateLayout title="Messages">{page}</PrivateLayout>;
};
export default EditProfile;
