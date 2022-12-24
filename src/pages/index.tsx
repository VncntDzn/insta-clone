import { PageTitle } from "common";
import { Banner } from "features";
import { Navbar } from "layouts";
import PublicLayout from "layouts/public-layout";
import { ChildrenType } from "types";

const Home = () => {
  return (
    <>
      <PageTitle />
      <Navbar />
      <Banner />
    </>
  );
};
Home.getLayout = ({ children }: ChildrenType) => {
  return <PublicLayout>{children}</PublicLayout>;
};
export default Home;
