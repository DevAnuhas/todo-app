import express from "express";
import {
	getTodo,
	getTodoById,
	createTodo,
	deleteTodo,
	updateTodo,
} from "../application/todo.js";

const todoRouter = express.Router();

todoRouter.route("/").get(getTodo).post(createTodo);
todoRouter.route("/:id").get(getTodoById).delete(deleteTodo).patch(updateTodo);

export default todoRouter;
