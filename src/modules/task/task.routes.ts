import { Router } from "express";
import * as taskController from "./task.controller";
import { asyncHandler } from "../../utils/asyncHandler";

const router = Router();

router.post("/", asyncHandler(taskController.createTask));
router.get("/", asyncHandler(taskController.getTasks));

export default router;