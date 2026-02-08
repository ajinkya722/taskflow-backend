import { Router } from "express";
import taskRoutes from "./modules/task/task.routes";

const router = Router();

router.use("/tasks", taskRoutes);

export default router;
