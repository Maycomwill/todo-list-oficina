import { hash } from "bcrypt";
import { string } from "zod";
import * as bcrypt from "bcrypt";

export default function comparePassword(password: string, hash: string) {
  const compare = bcrypt.compareSync(password, hash);

  if (!compare) {
    return false;
  }
  return true;
}
