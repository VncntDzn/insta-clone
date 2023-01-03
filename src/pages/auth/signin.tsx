import { AuthLayout, SigninForm } from "features";
import { PublicLayout } from "layouts";
import { ReactElement } from "react";

const Signin = () => {
  return (
    <AuthLayout>
      <SigninForm />
    </AuthLayout>
  );
};

Signin.getLayout = (page: ReactElement) => {
  return <PublicLayout>{page}</PublicLayout>;
};
export default Signin;
