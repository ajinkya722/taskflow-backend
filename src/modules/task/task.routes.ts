import { Router } from "express";
import * as taskController from "./task.controller";

const router = Router();

router.post("/", taskController.createTask);
router.get("/", taskController.getTasks);

export default router;
