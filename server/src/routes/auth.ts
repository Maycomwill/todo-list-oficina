import { json } from "body-parser";
import { Router } from "express";
import { z, ZodError } from "zod";
import prisma from "../lib/prisma";
import { utils } from "../utils";

const router = Router();

//Rota de login
router.post("/login", json(), async (req, res) => {
  try {
    const bodySchema = z.object({
      email: z.string().email(),
      password: z.string(),
    });

    const { email, password } = bodySchema.parse(req.body);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return;
    }

    const compare = utils.comparePassword(password, user.password);

    if (!compare) {
      return;
    }
    const token = utils.generateToken(user.id);

    return res.status(200).send({ message: "Login efetuado", data: token });
  } catch (error) {
    if (error instanceof ZodError || error instanceof Error) {
      return res.status(500).send({ message: error.message, data: error });
    }
  }
});

//Rota de Verificação
router.post("/verify", json(), async (req, res) => {
  const bodySchema = z.object({
    token: z.string(),
  });

  const { token } = bodySchema.parse(req.body);

  const verify = utils.verifyToken(token);

  return res.status(200).send({ message: "", data: verify });
});
export const AuthRoutes = router;
