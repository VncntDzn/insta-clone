import { apps, credential } from "firebase-admin";
import { App, initializeApp } from "firebase-admin/app";

import { Auth, getAuth } from "firebase-admin/auth";
import { getFirestore, Firestore } from "firebase-admin/firestore";
/*
  Firebase admin documentation is outdated and have to do a little digging.
  Please refer to this document when needed:
  https://firebase.google.com/docs/reference/admin

  Another option if you're not familiar which package you want to use,
  please use * as an alternative.
  For example:
  import * as everything from 'firebase-admin'

  If ever you encounter a problem that states:
  Credential implementation provided to initializeApp() via the "credential" property failed to fetch a valid Google OAuth2 access token with the
  following error: "Error fetching access token: invalid_grant (Invalid grant: account not found)". There are two likely causes: (1) your
  Solution: Just generate a new access token in firebase console and it will solve the error.

  - Vincent Dizon, Jan. 2023
*/
let auth: Auth, firestore: Firestore;
(function initFirebaseAdmin() {
  if (!apps.length) {
    const admin: App = initializeApp({
      credential: credential.cert({
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY
          ? process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/gm, "\n")
          : undefined,
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      }),
    });

    auth = getAuth(admin);
    firestore = getFirestore(admin);
  }
})();

export { auth, firestore };
