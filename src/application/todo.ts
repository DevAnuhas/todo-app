// import ValidationError from "../domain/errors/validation-error";
// import { CreateReviewDTO } from "../domain/dtos/review";
import { Request, Response, NextFunction } from "express";
import Todo from "../infrastructure/schemas/Todo";
import mongoose from "mongoose";
import NotFoundError from "../domain/errors/not-found-error";

export const getTodo = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
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

export const getTodoById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
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

export const createTodo = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const todo = req.body;

		res.status(201).json({
			message: "Todo created successfully!",
		});
	} catch (error) {
		next(error);
	}
};

export const deleteTodo = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		console.log("Not implemented yet");
	} catch (error) {
		next(error);
	}
};

export const updateTodo = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		console.log("Not implemented yet");
	} catch (error) {
		next(error);
	}
};
