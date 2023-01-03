import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";

const Notifications = () => {
  return <div>Notifications</div>;
};

Notifications.getLayout = (page: ReactElement) => {
  return <PrivateLayout>{page}</PrivateLayout>;
};
export default Notifications;
