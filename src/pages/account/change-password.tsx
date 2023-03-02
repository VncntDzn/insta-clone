import { PageHeader } from "common";
import { AccountLayout, ChangePasswordForm } from "features/account";
import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";

const ChangePassword = () => {
  return (
    <AccountLayout>
      <PageHeader title="Change Password" />
      <ChangePasswordForm />
    </AccountLayout>
  );
};

ChangePassword.getLayout = (page: ReactElement) => {
  return <PrivateLayout title="Change Password">{page}</PrivateLayout>;
};
export default ChangePassword;
