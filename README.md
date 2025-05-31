# User Management API

User Management API is a RESTful service built using TypeScript, Express, and Prisma ORM. This API provides user management functionalities including registration, login, user listing, detail, update, and deletion. It is designed with modular structure and JWT-based authentication.

## ✨ Features

- User CRUD operations (Create, Read, Update, Delete)
- Request validation middleware
- Modular folder structure
- PostgreSQL database integration via Prisma ORM
- Environment configuration with dotenv

## 🚀 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [dotenv](https://github.com/motdotla/dotenv)

## 📦 Installation

1. **Clone this repository:**

   ```bash
   git clone https://github.com/farid-codes/user-management-api.git
   cd user-management-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup environment variables:**

   Create a `.env` file with the following content:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/db_name"
   PORT=3000
   ```

4. **Generate Prisma Client:**

   ```bash
   npx prisma generate
   ```

5. **Run the development server:**

   ```bash
   npm run dev
   ```

## 🧪 API Endpoints

### 👤 Users

- **GET** `/users`  
  Get a list of all users.

- **GET** `/users/:id`  
  Get user details by ID.

- **PUT** `/users`  
  Update user data.

- **DELETE** `/users/:id`  
  Delete a user by ID.

## 🧰 NPM Scripts

- `npm run dev` — Run server in development mode with nodemon
- `npm run build` — Compile TypeScript to JavaScript
- `npm start` — Run compiled JavaScript from `dist`

## 🛡 License

This project is licensed under the [MIT License](LICENSE).