import Create from "features/create";
import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Feed: NextPageWithLayout = () => {
  return <div></div>;
};

Feed.getLayout = (page: ReactElement) => {
  return <PrivateLayout>{page}</PrivateLayout>;
};
export default Feed;
