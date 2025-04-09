class NotAllowedError extends Error {
	constructor(message) {
		super(message);
		this.name = "NotAllowedError";
		Object.setPrototypeOf(this, NotAllowedError.prototype);
	}
}

export default NotAllowedError;
