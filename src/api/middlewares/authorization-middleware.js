import ForbiddenError from "../../domain/errors/forbidden-error";

export const isAdmin = (req, res, next) => {
	if (req.auth?.sessionClaims?.metadata?.role !== "admin") {
		throw new ForbiddenError("Forbidden");
	}
	next();
};
