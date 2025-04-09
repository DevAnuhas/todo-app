class ForbiddenError extends Error {
	constructor(message) {
		super(message);
		this.name = "ForbiddenError";
		Object.setPrototypeOf(this, ForbiddenError.prototype);
	}
}

export default ForbiddenError;
