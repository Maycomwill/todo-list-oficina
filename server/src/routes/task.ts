import { Router } from "express";
import z from "zod";
import prisma from "../lib/prisma";
import { json } from "body-parser";

const router = Router();

//Buscar uma tarefa única
router.get("/:id", async (req, res) => {
  try {
    const paramsSchema = z.object({
      id: z.string().cuid(),
    });

    const { id } = paramsSchema.parse(req.params);

    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });

    return res.status(200).send({ message: "Tarefa encontrada", data: task });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message, data: error });
    }
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(req.params);

    const tasks = await prisma.task.findMany({
      where: {
        userId: id,
      },
    });

    return res
      .status(200)
      .send({ message: "Tarefas encontradas", data: tasks });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message, data: error });
    }
  }
});

router.post("/", json(), async (req, res) => {
  try {
    const bodyParams = z.object({
      name: z.string(),
      userId: z.string().uuid(),
    });

    const { name, userId } = bodyParams.parse(req.body);

    const newTask = await prisma.task.create({
      data: {
        name,
        userId,
      },
    });

    return res
      .status(201)
      .send({ message: "Tarefa criada com sucesso", data: newTask });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message, data: error });
    }
  }
});

//Rota para atualizar tarefa
router.patch("/", json(), async (req, res) => {
  try {
    const bodySchema = z.object({
      isCompleted: z.boolean(),
      id: z.string().cuid(),
    });

    const { isCompleted, id } = bodySchema.parse(req.body);

    const update = await prisma.task.update({
      where: {
        id,
      },
      data: {
        isCompleted,
      },
    });

    return res.status(200).send({ message: "Tarefa atualizada", data: update });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message, data: error });
    }
  }
});

//Rota para deletar
router.delete("/:id", async (req, res) => {
  try {
    const paramsSchema = z.object({
      id: z.string().cuid(),
    });
    const { id } = paramsSchema.parse(req.params);

    await prisma.task.delete({
      where: {
        id,
      },
    });

    return res.status(200).send({ message: "Tarefa deletada", data: null });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send({ message: error.message, data: error });
    }
  }
});
export const TaskRoutes = router;
