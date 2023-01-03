import { AuthLayout, SigninForm } from "features";
import useCurrentUser from "hooks/useCurrentUser";
import { PublicLayout } from "layouts";
import { ReactElement } from "react";
const Signin = () => {
  const { user } = useCurrentUser();
  return (
    <AuthLayout>
      {user && <h1>ASD</h1>}
      <SigninForm />
    </AuthLayout>
  );
};

Signin.getLayout = (page: ReactElement) => {
  return <PublicLayout>{page}</PublicLayout>;
};
export default Signin;
