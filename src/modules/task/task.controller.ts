import { Request, Response } from "express";
import * as taskService from "./task.service";

export const createTask = (req: Request, res: Response) => {
  const task = taskService.createTask(req.body);
  res.status(201).json(task);
};

export const getTasks = (_req: Request, res: Response) => {
  const tasks = taskService.getTasks();
  res.status(200).json(tasks);
};
