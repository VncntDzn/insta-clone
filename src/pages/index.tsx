import { About, Banner, Services } from "features";
import PublicLayout from "layouts/public-layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Banner />
      {/* <Services /> */}
      {/* <About /> */}
    </>
  );
};
Home.getLayout = (page: ReactElement) => {
  return <PublicLayout>{page}</PublicLayout>;
};
export default Home;
