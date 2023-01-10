import { auth } from "db/admin";
import type { NextApiRequest, NextApiResponse } from "next";

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
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default signupHandler;
