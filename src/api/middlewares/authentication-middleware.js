import UnauthorizedError from "../../domain/errors/unauthorized-error";

export const isAuthenticated = (req, res, next) => {
	if (!req.auth?.userId) {
		throw new UnauthorizedError("Unauthorized access");
	}
	next();
};
