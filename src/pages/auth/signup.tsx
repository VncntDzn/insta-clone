import { PageTitle } from "common";
import { AuthLayout, SignupForm } from "features";

const Signup = () => {
  return (
    <AuthLayout>
      <PageTitle title="Signup" />
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
