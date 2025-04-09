// import ValidationError from "../domain/errors/validation-error.js";
// import { CreateReviewDTO } from "../domain/dtos/review";
import Todo from "../infrastructure/schemas/Todo.js";
import mongoose from "mongoose";
import NotFoundError from "../domain/errors/not-found-error.js";

export const getTodo = async (req, res, next) => {
	try {
		const todos = await Todo.find().sort({ createdAt: -1 }).lean();

		if (!todos) {
			throw new Error("Todos not found");
		}

		res.status(200).json(todos);
	} catch (error) {
		next(error);
	}
};

export const getTodoById = async (req, res, next) => {
	try {
		const todoId = req.params.id;

		if (!mongoose.Types.ObjectId.isValid(todoId)) {
			throw new NotFoundError("Todo not found");
		}

		const todos = await Todo.findById(todoId).lean();

		if (!todos) {
			throw new NotFoundError("Todos not found");
		}

		res.status(200).json(todos);
	} catch (error) {
		next(error);
	}
};

export const createTodo = async (req, res, next) => {
	try {
		const todo = req.body;

		res.status(201).json({
			message: "Todo created successfully!",
		});
	} catch (error) {
		next(error);
	}
};

export const deleteTodo = async (req, res, next) => {
	try {
		console.log("Not implemented yet");
	} catch (error) {
		next(error);
	}
};

export const updateTodo = async (req, res, next) => {
	try {
		console.log("Not implemented yet");
	} catch (error) {
		next(error);
	}
};
