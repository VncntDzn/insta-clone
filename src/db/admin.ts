import { apps, credential } from "firebase-admin";
import { App, initializeApp } from "firebase-admin/app";

/*
  If ever encountered a problem that states:
    Credential implementation provided to initializeApp() via the "credential" property failed to fetch a valid Google OAuth2 access token with the
    following error: "Error fetching access token: invalid_grant (Invalid grant: account not found)". There are two likely causes: (1) your
  Solution: Just generate a new access token in firebase console and it will solve the error.

*/
let admin;
if (!apps.length) {
  admin = initializeApp({
    credential: credential.cert({
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY
        ? process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/gm, "\n")
        : undefined,
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    }),
  });
}
export default admin as App;
