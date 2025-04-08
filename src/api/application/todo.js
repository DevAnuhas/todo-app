import express from "express";
import {
	getTodo,
	createTodo,
	deleteTodo,
	updateTodo,
} from "../controllers/todo";

const todoRouter = express.Router();

todoRouter
	.route("/")
	.get(getTodo)
	.post(createTodo)
	.delete(deleteTodo)
	.update(updateTodo);

export default reviewRouter;
