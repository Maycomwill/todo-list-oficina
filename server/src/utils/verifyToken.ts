import * as jwt from "jsonwebtoken";

interface JwtPayloadData {
  id: string;
  iat: number;
  exp: number;
}

export default function verifyToken(token: string) {
  const verify = jwt.verify(token, String(process.env.JSONWEBTOKEN)) as JwtPayloadData;

  return verify;
}
