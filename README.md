# fimoneyProject Backend

This is the backend service for the **fimoneyProject**. It is built with Node.js, Express, and MongoDB (using Mongoose). The backend provides RESTful APIs for authentication, product management, and more.

## Features

- User authentication (JWT-based)
- Product CRUD operations
- API documentation with Swagger
- Environment variable support with `.env`
- Modular code structure

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) instance (local or cloud)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ShubhankarRaj9/fimoneyProject.git
   cd fimoneyProject/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root of the backend folder.
   - Add the following:
     ```
     DATABASE_URL=your_mongodb_connection_string
     PORT=3000
     JWT_SECRET=jwt_secret
     ```

4. **Start the server:**
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:3000` by default.

## API Documentation

- Swagger docs available at: `http://localhost:3000/api-docs` (if enabled)

## API Routes

| Method | Endpoint                | Description                  | Protected |
|--------|------------------------ |-----------------------------|-----------|
| POST   | `/api/auth/register`    | Register a new user         | No        |
| POST   | `/api/auth/login`       | User login                  | No        |
| GET    | `/api/products`         | Get all products            | No        |
| GET    | `/api/products/:id`     | Get product by ID           | No        |
| POST   | `/api/products`         | Create a new product        | Yes       |
| PUT    | `/api/products/:id`     | Update a product            | Yes       |
| DELETE | `/api/products/:id`     | Delete a product            | Yes       |

> **Note:** Protected routes require a valid JWT token in the `Authorization` header.

You can expand this table as you add more features to your API.

## Project Structure

```
backend/
│
├── config/           # Database and Swagger config
├── controllers/      # Route controllers
├── middleware/       # Custom middleware
├── models/           # Mongoose models
├── routes/           # API routes
├── index.js          # Express app setup
├── server.js         # Server entry point
└── .env              # Environment variables
```

## Scripts

- `npm run dev` — Start server with nodemon (development)
- `npm start` — Start server (production)

## Final Checklist

- [x] Project initialized with Git and pushed to GitHub
- [x] Complete and clear README.md
- [x] .env file configured with required variables
- [x] .gitignore includes node_modules and .env
- [x] Modular code structure (`config/`, `controllers/`, `middleware/`, `models/`, `routes/`)
- [x] Nodemon for development (`npm run dev`)
- [x] Swagger for API documentation
- [x] Error handling implemented
- [x] JWT authentication for protected routes
- [x] Database connection using Mongoose
- [x] All endpoints tested

---

---

Thank you for reviewing! This project was built with dedication and a learning mindset.  
Feel free to give feedback or
