// import ValidationError from "../domain/errors/validation-error";
// import { CreateReviewDTO } from "../domain/dtos/review";

export const getTodo = async (req, res, next) => {
	try {
		const todo = req.body;

		console.log(review.error);

		// if (!review.success) {
		// 	throw new ValidationError("Please enter all required fields");
		// }
		res.status(201).json({
			todo,
		});
	} catch (error) {
		next(error);
	}
};

export const createTodo = async (req, res, next) => {
	try {
		const todo = req.body;

		console.log(review.error);

		if (!review.success) {
			throw new ValidationError("Please enter all required fields");
		}

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

export const updateToto = async (req, res, next) => {
	try {
		console.log("Not implemented yet");
	} catch (error) {
		next(error);
	}
};
