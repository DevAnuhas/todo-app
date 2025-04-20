import z from "zod";

export const CreateTodoDTO = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
	status: z.string().min(1),
	priority: z.string().min(1),
	dueDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
		message: "Invalid date format",
	}),
	tags: z.array(z.string()).min(1),
});

export const UpdateTodoDTO = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
	status: z.string().min(1),
	priority: z.string().min(1),
	dueDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
		message: "Invalid date format",
	}),
	tags: z.array(z.string()).min(1),
});
