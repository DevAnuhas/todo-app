# Todo App API

This project is a **RESTful API** for a Todo application, built using Node.js and Express. It serves as the backend for a Todo frontend application and includes all standard CRUD operations with proper error handling, data validation, and database integration using MongoDB.

### Core Features

- **CRUD Operations**:
  - **Create**: Add a new todo.
  - **Read**: Retrieve todos.
  - **Update**: Modify existing todos.
  - **Delete**: Remove todos.
- **Validation**: Ensures all input data is validated before processing.
- **Error Handling**: Handles errors gracefully with meaningful responses.
- **Database Integration**: Integrated MongoDB using Mongoose for data persistence.
- **RESTful Architecture**: Adheres to REST principles for API design.
- **Consistent Response Formatting**: Ensures uniformity in API responses.
- **Code Organization**: Structured codebase for maintainability and scalability.
- **Schema Design**: Used Mongoose to define a robust schema for todos.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/DevAnuhas/todo-app-api.git
```

2. Install dependencies:

```bash
cd todo-app-api
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add the following:

```env
MONGODB_URI=<your_mongodb_connection_string>
```

### Running the Application

1. Start the backend server

```bash
npm run dev
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
