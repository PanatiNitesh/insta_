import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({

  publicRoutes: ['/anyone-can-visit-this-route'],

  ignoredRoutes: ['/no-auth-in-this-route'],
});

export function middleware(request: NextRequest) {
  return NextResponse.next();
}


export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
