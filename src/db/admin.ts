import * as sample from "firebase-admin";
import { apps } from "firebase-admin";
import { App, initializeApp } from "firebase-admin/app";
const serviceAccount = require("./adminsdk.json");
let admin;
if (!apps.length) {
  admin = initializeApp({
    credential: sample.credential.cert(serviceAccount),
  });
}
export default admin as App;
