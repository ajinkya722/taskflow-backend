import express from "express";
import routes from "./routes";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api", routes);

export default app;
