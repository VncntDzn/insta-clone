import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";

const Explore = () => {
  return <div>Explore</div>;
};

Explore.getLayout = (page: ReactElement) => {
  return <PrivateLayout title="Explore">{page}</PrivateLayout>;
};
export default Explore;
