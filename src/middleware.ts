import { authMiddleware, useAuth } from "@clerk/nextjs";
const whiteList = ["ktad592@gmail.com"];
// const { userId, sessionId, getToken, isLoaded, isSignedIn, signOut } =
//   useAuth();
export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth, req, evt) {
    // check if auth.email is on the whiteList
    if (
      auth.sessionClaims?.email &&
      !whiteList.includes(auth.sessionClaims.email.toString())
    ) {
      console.log("I can implement my own whitelist here using clerk");
      // signOut();
    }
    // redirect to the dashboard
    // sign out the user
  },
});

// export default authMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
