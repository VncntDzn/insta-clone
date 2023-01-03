import { PageTitle } from "common";
import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";

const Messages = () => {
  return <div>Messages</div>;
};

Messages.getLayout = (page: ReactElement) => {
  return <PrivateLayout>{page}</PrivateLayout>;
};
export default Messages;
