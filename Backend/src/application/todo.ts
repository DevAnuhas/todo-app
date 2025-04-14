import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import AuthenticatedRequest from "../types/authenticated-request";
import Todo from "../infrastructure/schemas/Todo";
import NotFoundError from "../domain/errors/not-found-error";
import ValidationError from "../domain/errors/validation-error";
import UnauthorizedError from "../domain/errors/unauthorized-error";
import { CreateTodoDTO, UpdateTodoDTO } from "../domain/dtos/todo";

export const getTodo = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const todos = await Todo.find().sort({ createdAt: -1 }).lean();

		if (!todos) {
			throw new NotFoundError("Todos not found");
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

		const todos = await Todo.findById(todoId);

		if (!todos) {
			throw new NotFoundError("Todo not found");
		}

		res.status(200).json(todos);
	} catch (error) {
		next(error);
	}
};

export const createTodo = async (
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction
) => {
	try {
		const todo = CreateTodoDTO.safeParse(req.body);

		console.log(todo.error);

		if (!todo.success) {
			throw new ValidationError("Please enter all required fields");
		}

		// const userId = req.auth?.userId;
		// if (!userId) {
		// 	throw new UnauthorizedError("User authentication required");
		// }

		await Todo.create({
			...todo.data,
		});

		res.status(201).json({
			message: "Todo created successfully!",
		});
	} catch (error) {
		next(error);
	}
};

export const updateTodo = async (
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction
) => {
	try {
		const todoId = req.params.id;
		const todos = await Todo.findById(todoId);

		if (!todos) {
			throw new NotFoundError("Todo not found");
		}

		const updatedTodo = UpdateTodoDTO.safeParse(req.body);

		if (!updatedTodo.success) {
			throw new ValidationError("Please enter all required fields");
		}

		// const userId = req.auth?.userId;
		// if (!userId) {
		// 	throw new UnauthorizedError("User authentication required");
		// }

		await Todo.findByIdAndUpdate(todoId, updatedTodo.data);

		res.status(200).json({
			message: "Todo updated successfully!",
		});
	} catch (error) {
		next(error);
	}
};

export const deleteTodo = async (
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction
) => {
	try {
		const todoId = req.params.id;

		if (!mongoose.Types.ObjectId.isValid(todoId)) {
			throw new NotFoundError("Todo not found");
		}

		const todos = await Todo.findById(todoId);

		if (!todos) {
			throw new NotFoundError("Todo not found");
		}

		// const userId = req.auth?.userId;
		// if (!userId) {
		// 	throw new UnauthorizedError("User authentication required");
		// }

		await Todo.findByIdAndDelete(todoId);

		res.status(200).json({
			message: "Todo deleted successfully!",
		});
	} catch (error) {
		next(error);
	}
};
