import { PageTitle } from "common";
import { AuthLayout, SigninForm } from "features";

const Signin = () => {
  return (
    <AuthLayout>
      <PageTitle title="Signin" />
      <SigninForm />
    </AuthLayout>
  );
};

export default Signin;
