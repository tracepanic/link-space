import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals
    "/_next(.*)",
    // Skip all static files
    "/((?!.*\\.(?:png|jpg|jpeg|gif|svg|ico|woff2|woff|ttf|eot|pdf|txt|map))$).*)",
    // Protect "/dashboard" and its sub-routes
    "/dashboard(.*)",
  ],
};
