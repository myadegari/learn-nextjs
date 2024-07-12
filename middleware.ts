import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublickRoute = createRouteMatcher(["/"]);

export default clerkMiddleware((auth, request) => {
  if (!isPublickRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
