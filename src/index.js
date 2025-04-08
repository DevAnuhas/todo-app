import "dotenv/config";
import express from "express";
import connectDB from "./infrastructure/db/connect.js";
import ora from "ora";

import todoRouter from "./api/todo.js";

// import globalErrorHandlingMiddleware from "./api/middlewares/global-error-handling-middleware";

// Create an Express instance
const app = express();

// Middleware to parse JSON data in the request body
app.use(express.json());

// Connect to the database
connectDB();

// Define the routes
app.get("/", (req, res) => {
	res.send("API is running...");
});

// Define the API routes
app.use("/api/todos", todoRouter);

// Middleware to handle errors
// app.use(globalErrorHandlingMiddleware);

// Define the port (Vercel will override this with its own PORT env variable)
const PORT = process.env.PORT || 3000;
const spinner = ora(`Starting server on port ${PORT}...`).start();
app.listen(PORT, () => {
	spinner.succeed(`[SUCCESS] Server started on port ${PORT}`);
});
