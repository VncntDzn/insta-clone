import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";

const Reels = () => {
  return <div>Reels</div>;
};

Reels.getLayout = (page: ReactElement) => {
  return <PrivateLayout title="Reels">{page}</PrivateLayout>;
};
export default Reels;
