import * as bcrypt from "bcrypt";

export default function generateHash(password: string) {
  const salt = 10;
  const hash = bcrypt.hashSync(password, salt);

  return hash;
}
