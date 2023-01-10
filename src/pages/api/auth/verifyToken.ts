import { auth } from "db/admin";
import type { NextApiRequest, NextApiResponse } from "next";

const verifyTokenHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { idToken } = req.body;

  if (req.method !== "POST") return res.status(405).end();
  if (!idToken) return res.status(500).json({ message: "No id token found" });

  try {
    const result = await auth.verifyIdToken(idToken);
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

export default verifyTokenHandler;
