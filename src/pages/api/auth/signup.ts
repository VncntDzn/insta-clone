import { auth, firestore } from "db/admin";
import type { NextApiRequest, NextApiResponse } from "next";

interface CreateUserType {
  displayName: string;
  uid: string;
}
const signupHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password, displayName } = req.body;
  if (req.method !== "POST") return res.status(405).end();

  try {
    const result = await auth.createUser({
      displayName,
      email,
      emailVerified: false,
      password,
      disabled: false,
    });

    const createUserResponse = await createUser({
      displayName,
      uid: result.uid,
    });
    return res.status(200).json({ createUserResponse });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const createUser = async ({ displayName, uid }: CreateUserType) => {
  try {
    await firestore.collection("users").doc(`${uid}`).set({
      uid,
      displayName,
    });
    return { message: "success", uid, displayName };
  } catch (error) {
    console.log(error);
    return error;
  }
};
export default signupHandler;
