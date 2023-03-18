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
  RiMessageLine, RiVideoFill,
  RiVideoLine
} from "react-icons/ri";
import ROUTE_NAME from "./constants";

const index = [
  {
    name: "Feed",
    inactiveIcon: RiHome5Line,
    activeIcon: RiHome5Fill,
    path: ROUTE_NAME.FEED,
  },
  {
    name: "Explore",
    inactiveIcon: RiCompassDiscoverLine,
    activeIcon: RiCompassDiscoverFill,
    path: ROUTE_NAME.EXPLORE,
  },
  {
    name: "Reels",
    inactiveIcon: RiVideoLine,
    activeIcon: RiVideoFill,
    path: ROUTE_NAME.REELS,
  },
  {
    name: "Create",
    inactiveIcon: RiAddBoxLine,
    activeIcon: RiAddBoxFill,
    path: ROUTE_NAME.NEW_POST,
  },
  {
    name: "Messages",
    inactiveIcon: RiMessageLine,
    activeIcon: RiMessageFill,
    path: ROUTE_NAME.MESSAGES,
  },
  {
    name: "Notifications",
    inactiveIcon: RiHeartLine,
    activeIcon: RiHeartFill,
    path: ROUTE_NAME.NOTIFICATIONS,
  },

  {
    name: "Profile",
    activeIcon: Avatar,
    inactiveIcon: Avatar,
    path: ROUTE_NAME.PROFILE,
  },
];

export default index;
