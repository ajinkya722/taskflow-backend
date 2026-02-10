import { Request, Response } from "express";
import * as taskService from "./task.service";
import { createTaskSchema } from "./task.schema";
import { error } from "node:console";

export const createTask = (req: Request, res: Response) => {
  const parsedBody = createTaskSchema.safeParse(req.body);
  if (!parsedBody.success) {
    return res.status(400).json({
      status: 400,
      error: "Bad_Request",
      message: "Validation failed",
      details: parsedBody.error.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message,
    })),
    });
  }
  const task = taskService.createTask(parsedBody.data);
  res.status(201).json(task);
};

export const getTasks = (_req: Request, res: Response) => {
  const tasks = taskService.getTasks();
  res.status(200).json(tasks);
};
