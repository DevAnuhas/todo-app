import express from "express";
import {
	getTodo,
	getTodoById,
	createTodo,
	deleteTodo,
	updateTodo,
} from "../application/todo";
// import { isAuthenticated } from "./middlewares/authentication-middleware";

const todoRouter = express.Router();

todoRouter.route("/").get(getTodo).post(createTodo);
todoRouter.route("/:id").get(getTodoById).delete(deleteTodo).patch(updateTodo);

// Authorized routes
/* todoRouter
	.route("/")
	.get(isAuthenticated, getTodo)
	.post(isAuthenticated, createTodo);
todoRouter
	.route("/:id")
	.get(isAuthenticated, getTodoById)
	.delete(isAuthenticated, deleteTodo)
	.patch(isAuthenticated, updateTodo); */

export default todoRouter;
