/**

 A utility code that checks whether the current route is equal to the passed parameter.
 @param router - NextJS built-in router.
 @param pathname - path.
 @returns boolean value whether the current route is equal to the passed parameter.
*/

import { NextRouter } from "next/router";

const isActiveRoute = (router: NextRouter, pathname: string) => {
  return router.pathname === pathname;
};

export default isActiveRoute;
