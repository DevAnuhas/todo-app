import mongoose from "mongoose";
const { Schema } = mongoose;

export const TodoSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
		enum: ["pending", "in_progress", "completed"],
	},
	priority: {
		type: String,
		required: true,
		enum: ["low", "medium", "high"],
	},
	dueDate: {
		type: Date,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	completed: {
		type: Boolean,
		default: false,
	},
	completedAt: {
		type: Date,
	},
	tags: [
		{
			type: String,
		},
	],
});

export default mongoose.model("Todo", TodoSchema);
