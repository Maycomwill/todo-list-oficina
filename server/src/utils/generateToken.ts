import * as jwt from "jsonwebtoken";

export default function generateToken(id: string) {
  const token = jwt.sign({id}, String(process.env.JSONWEBTOKEN), {
    expiresIn: "24h",
  });

  return token;
}
