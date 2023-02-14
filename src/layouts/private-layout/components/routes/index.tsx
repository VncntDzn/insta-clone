import { Avatar } from "common";
import {
  RiAddBoxFill,
  RiAddBoxLine,
  RiCompassDiscoverFill,
  RiCompassDiscoverLine,
  RiHeartFill,
  RiHeartLine,
  RiHome5Fill,
  RiHome5Line,
  RiMessageFill,
  RiMessageLine,
  RiSearchFill,
  RiSearchLine,
  RiVideoFill,
  RiVideoLine,
} from "react-icons/ri";
import ROUTE_NAME from "./constants";

const index = [
  {
    name: "Feed",
    inactive_icon: <RiHome5Line size={30} />,
    active_icon: <RiHome5Fill size={30} />,
    path: ROUTE_NAME.FEED,
  },
  {
    name: "Explore",
    inactive_icon: <RiCompassDiscoverLine size={30} />,
    active_icon: <RiCompassDiscoverFill size={30} />,
    path: ROUTE_NAME.EXPLORE,
  },
  {
    name: "Reels",
    inactive_icon: <RiVideoLine size={30} />,
    active_icon: <RiVideoFill size={30} />,
    path: ROUTE_NAME.REELS,
  },
  {
    name: "Create",
    inactive_icon: <RiAddBoxLine size={30} />,
    active_icon: <RiAddBoxFill size={30} />,
    path: ROUTE_NAME.NEW_POST,
  },
  {
    name: "Messages",
    inactive_icon: <RiMessageLine size={30} />,
    active_icon: <RiMessageFill size={30} />,
    path: ROUTE_NAME.MESSAGES,
  },
  {
    name: "Notifications",
    inactive_icon: <RiHeartLine size={30} />,
    active_icon: <RiHeartFill size={30} />,
    path: ROUTE_NAME.NOTIFICATIONS,
  },

  {
    name: "Profile",
    active_icon: <Avatar />,
    inactive_icon: <Avatar />,
    path: ROUTE_NAME.PROFILE,
  },
];

export default index;
