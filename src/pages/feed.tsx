import { PageTitle } from "common";
import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";

const Feed = () => {
  return <div>Feed</div>;
};

Feed.getLayout = (page: ReactElement) => {
  return <PrivateLayout>{page}</PrivateLayout>;
};
export default Feed;
