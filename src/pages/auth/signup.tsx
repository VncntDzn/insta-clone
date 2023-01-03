import { AuthLayout, SignupForm } from "features";
import { PublicLayout } from "layouts";
import { ReactElement } from "react";

const Signup = () => {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
};

Signup.getLayout = (page: ReactElement) => {
  return <PublicLayout title="Signup">{page}</PublicLayout>;
};
export default Signup;
