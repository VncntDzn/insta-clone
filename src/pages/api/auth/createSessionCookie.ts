import { serialize } from "cookie";
import { auth } from "db/admin";
import type { NextApiRequest, NextApiResponse } from "next";
const sessionCookieHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { idToken } = req.body;
  if (req.method !== "POST") return res.status(405).end();

  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  // Create the session cookie. This will also verify the ID token in the process.
  // The session cookie will have the same claims as the ID token.
  // To only allow session cookie setting on recent sign-in, auth_time in ID token
  // can be checked to ensure user was recently signed in before creating a session cookie.
  try {
    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn,
    });

    // Set cookie policy for session cookie.
    const options = {
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
      path: "/",
    };
    res.setHeader(
      "Set-Cookie",
      serialize("insta-clone-cookie", sessionCookie, options)
    );

    return res.status(200).json({ sessionCookie });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

export default sessionCookieHandler;
