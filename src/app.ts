import express, { Request, Response } from "express";

const getUsers = async (_: Request, res: Response) => {
  const user = "felipe";
  setTimeout(() => user, 300);
  res.setTimeout(300, () => {
    res.json({ message: "demorou 300ms" });
  });
};

const app = express();

app.use(express.json());

app.get("/users", getUsers);

export { app };
