import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";
import { useAppSelector } from "store/hooks";

const Feed = () => {
  return (
    <div>
      <h1>feed</h1>
    </div>
  );
};

Feed.getLayout = (page: ReactElement) => {
  return <PrivateLayout>{page}</PrivateLayout>;
};
export default Feed;
