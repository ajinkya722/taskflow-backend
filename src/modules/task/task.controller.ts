import { Request, Response } from "express";
import * as taskService from "./task.service";
import { createTaskSchema } from "./task.schema";
import { AppError } from "../../utils/AppError";

export const createTask = async (req: Request, res: Response) => {
  const parsedBody = createTaskSchema.safeParse(req.body);
  if (!parsedBody.success) {
    throw new AppError(
      400,
      "Validation Failed",
      "Validation error",
    )
  }
  const task = await taskService.createTask(parsedBody.data);
  res.status(201).json(task);
};

export const getTasks = async (_req: Request, res: Response) => {
  const tasks = await taskService.getTasks();
  res.status(200).json(tasks);
};
