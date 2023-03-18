/**

 A utility code that checks whether the current route is equal to the passed parameter.
 @param router - NextJS built-in router.
 @param path - path.
 @returns boolean value whether the current route is equal to the passed parameter.
*/

import { NextRouter } from "next/router";
interface ActiveRouteType {
  router: NextRouter;
  path: string;
}
const isActiveRoute = ({ router, path }: ActiveRouteType) => {
  return router.pathname === path;
};

export default isActiveRoute;
