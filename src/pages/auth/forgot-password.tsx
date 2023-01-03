import { AuthLayout, ForgotPasswordForm } from "features";
import { PublicLayout } from "layouts";
import { ReactElement } from "react";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

ForgotPassword.getLayout = (page: ReactElement) => {
  return <PublicLayout title="Forgot Password">{page}</PublicLayout>;
};
export default ForgotPassword;
