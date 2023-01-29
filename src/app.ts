import express, { Request, Response } from "express";
import { prisma } from "./database/prismaClient";

const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  res.status(201).json(user);
};

const getUsers = async (_: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

const app = express();

app.use(express.json());
app.post("/users", createUser);
app.get("/users", getUsers);

export { app };
