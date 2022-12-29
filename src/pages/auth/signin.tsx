import { PageTitle } from "common";
import { AuthLayout, SigninForm } from "features";
import { ReactElement } from "react";

const Signin = () => {
  return (
    <>
      <SigninForm />
    </>
  );
};

Signin.getLayout = (page: ReactElement) => {
  return <AuthLayout title="Signin">{page}</AuthLayout>;
};
export default Signin;
