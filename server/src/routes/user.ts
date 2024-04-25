import { Router } from "express";
import prisma from "../lib/prisma";
import { json } from "body-parser";
import z, { ZodError } from "zod";
import { utils } from "../utils";

const router = Router();

//Rota para encontrar todos os usuários do banco de dados
router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    if (users.length === 0) {
      return res.status(200).send({
        message: "Não há usuários cadastro no banco de dados",
        data: null,
      });
    }

    return res
      .status(200)
      .send({ message: "Usuários encontrados", data: users });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message, data: error });
    }
  }
});

//Rota para cadastrar um usuário no banco de dados
router.post("/", json(), async (req, res) => {
  try {
    const bodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
    });
    const { email, name, password } = bodySchema.parse(req.body);

    const encryptedPassword = utils.generateHash(password)

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: encryptedPassword,
      },
    });

    res
      .status(201)
      .send({ message: "Usuário cadastrado com sucesso", data: newUser });
  } catch (error) {
    if (error instanceof ZodError || error instanceof Error) {
      return res.status(500).send({ message: error.message, data: error });
    }
  }
});

//Rota para encontrar um usuário
router.get("/:id", async (req, res) => {
  try {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(req.params);

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return res.status(200).send({ message: "Usuário encontrado", data: user });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message, data: error });
    }
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(req.params);

    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    if (!user) {
      return res
        .status(400)
        .send({ message: "Usuário não encontrado", data: null });
    }

    return res.status(200).send({ message: "Usuário deletado", data: null });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message, data: error });
    }
  }
});

export const UserRoutes = router;
