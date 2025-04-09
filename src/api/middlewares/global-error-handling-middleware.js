import ValidationError from "../../domain/errors/validation-error.js";
import NotFoundError from "../../domain/errors/not-found-error.js";
import UnauthorizedError from "../../domain/errors/unauthorized-error.js";
import ForbiddenError from "../../domain/errors/forbidden-error.js";
import NotAllowedError from "../../domain/errors/not-allowed-error.js";

const globalErrorHandlingMiddleware = (err, req, res, next) => {
	if (err instanceof ValidationError) {
		res.status(400).json({ message: err.message });
		return;
	}

	if (err instanceof UnauthorizedError) {
		res.status(401).json({ message: err.message });
		return;
	}

	if (err instanceof ForbiddenError) {
		res.status(403).json({ message: err.message });
		return;
	}

	if (err instanceof NotFoundError) {
		res.status(404).json({ message: err.message });
		return;
	}

	if (err instanceof NotAllowedError) {
		res.status(405).json({ message: err.message });
		return;
	}

	res.status(500).json({
		message: "Internal server error",
	});

	return next();
};

export default globalErrorHandlingMiddleware;
