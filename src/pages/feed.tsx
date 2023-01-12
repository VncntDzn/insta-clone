import Create from "features/create";
import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { TOGGLE_MODAL } from "store/slices/modalSlice";
import { NextPageWithLayout } from "./_app";

const Feed: NextPageWithLayout = () => {
  
 
  return (
    <div>
      
      <Create />
    </div>
  );
};

Feed.getLayout = (page: ReactElement) => {
  return <PrivateLayout>{page}</PrivateLayout>;
};
export default Feed;
