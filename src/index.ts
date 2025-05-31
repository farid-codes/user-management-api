
import express, { Request, Response } from "express";
import createError from "http-errors"
import dotenv from "dotenv";
import usersController from "./users/users.controller";


const app = express()
dotenv.config()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use("/users", usersController);

// handle 404 error
app.use((req: Request, res: Response, next: Function) => {
    next(createError(404))
});

app.listen(PORT, () =>
    console.log(`⚡️[server]: Server is running at https://localhost:` + PORT)
);