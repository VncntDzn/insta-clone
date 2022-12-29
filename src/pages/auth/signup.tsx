import { AuthLayout, SignupForm } from "features";
import { ReactElement } from "react";

const Signup = () => {
  return (
    <>
      <SignupForm />
    </>
  );
};

Signup.getLayout = (page: ReactElement) => {
  return <AuthLayout title="Signup">{page}</AuthLayout>;
};
export default Signup;
