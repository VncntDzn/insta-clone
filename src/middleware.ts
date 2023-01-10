import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
// reference: https://www.youtube.com/watch?v=JJw_PqfNFn4
const privateRoutes = [
  "/feed",
  "/messages",
  "/search",
  "/explore",
  "/notifications",
  /*   "/protected", */
];
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const hostname = request.nextUrl.origin;
  const pathname = request.nextUrl.pathname;
  const INSTA_CLONE_COOKIE = request.cookies.get("insta-clone-cookie")?.value;
  // authenticated

  if (INSTA_CLONE_COOKIE) {
    if (pathname.startsWith("/auth")) {
      return NextResponse.redirect(`${hostname}/feed`);
    }
    return NextResponse.next();
  } else {
    if (privateRoutes.includes(pathname)) {
      return NextResponse.redirect(`${hostname}/auth/signin`);
    }

    return NextResponse.next();
  }
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
