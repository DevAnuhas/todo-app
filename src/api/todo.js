import express from "express";
import {
	getTodo,
	createTodo,
	deleteTodo,
	updateTodo,
} from "../application/todo.js";

const todoRouter = express.Router();

todoRouter
	.route("/")
	.get(getTodo)
	.post(createTodo)
	.delete(deleteTodo)
	.patch(updateTodo);

export default todoRouter;
