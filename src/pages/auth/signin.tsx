import PublicLayout from "layouts/public-layout";
import { ReactElement } from "react";

const Signin = () => {
  return <div>Signin</div>;
};

Signin.getLayout = (page: ReactElement) => {
  return <PublicLayout title="Signin">{page}</PublicLayout>;
};
export default Signin;
