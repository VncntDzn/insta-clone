import { apps, credential } from "firebase-admin";
import { App, initializeApp } from "firebase-admin/app";
const serviceAccount = require("./adminsdk.json");
let admin;
if (!apps.length) {
  admin = initializeApp({
    credential: credential.cert(serviceAccount),
  });
}
export default admin as App;
