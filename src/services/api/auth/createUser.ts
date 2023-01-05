/*
    Firebase admin documentation is outdated and have to do a little digging.
    Please refer to this document when needed:
    https://firebase.google.com/docs/reference/admin

    Another option if you're not familiar which package you want to use,
    please use * as an alternative.
    For example:
    import * as everything from 'firebase-admin'

    - Vincent Dizon, Jan. 2023
*/

import admin from "db/admin";
import { getAuth } from "firebase-admin/auth";

const addUser = async ({ email, password }) => {
  let CODE;
  try {
    const result = await getAuth(admin).createUser({
      email,
      emailVerified: false,
      password,
      disabled: false,
    });
    CODE = 200;
    return { result, CODE };
  } catch (error) {
    CODE = 500;
    return { error, CODE };
  }
};
export default addUser;
