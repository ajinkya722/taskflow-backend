import express from "express";
import routes from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";
const app = express();

// Middleware to parse JSON
app.use(express.json());
// Routes
app.use("/api", routes);
// Error handling middleware
app.use(errorMiddleware);

export default app;
