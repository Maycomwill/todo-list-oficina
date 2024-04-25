import express from "express";
import { UserRoutes } from "./routes/user";
import { TaskRoutes } from "./routes/task";
import { AuthRoutes } from "./routes/auth";
import { config } from "dotenv";
import cors from 'cors'


config();

const app = express();

app.use(cors({
  origin: "*"
}))
app.use("/user", UserRoutes);
app.use("/task", TaskRoutes);
app.use("/auth", AuthRoutes);

//GET, POST, PATCH, DELETE
app.get("/", (req, res) => {
  return res.send("Bem vindo a oficina todo-list");
});

app.listen(3333, () => {
  console.log("O servidor está ligado ❤️");
});
