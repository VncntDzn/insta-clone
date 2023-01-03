import { Banner } from "features";
import PublicLayout from "layouts/public-layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Banner />
    </>
  );
};
Home.getLayout = (page: ReactElement) => {
  return (
    <PublicLayout hasNavbar isPadded>
      {page}
    </PublicLayout>
  );
};
export default Home;
