import type { NextApiRequest, NextApiResponse } from "next";
import { addUser } from "services";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  switch (req.method) {
    case "POST":
      const { CODE, result, error } = await addUser({ email, password });

      return res.status(CODE).json({ result, error });
    case "GET":
      return res.send("GET");
    default:
      return res.send("sad");
  }
};

export default handler;
