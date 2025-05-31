import express, { Request, Response } from "express";
import ResponseMessage from "../response/response.message";
import { ResponseType } from "../response/response.type";
import UserService from "./users.services";

const router = express.Router();
const userService = new UserService();

const handleError = (error: any, res: Response) => {
    const responseMessage = ResponseMessage.fromError(error)
    res.status(responseMessage.statusCode).json(responseMessage);
}

router.get("/", async (req: Request, res: Response) => {
    const users = await userService.getUsers();

    let responseMessage: ResponseMessage;
    if (!users.length) {
        responseMessage = new ResponseMessage(ResponseType.notExist);
    } else {
        responseMessage = new ResponseMessage(ResponseType.success, users);
    }

    res.json(responseMessage);

})

router.get("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const user = await userService.getUserById(id);

    let responseMessage: ResponseMessage;
    if (user == null) {
        responseMessage = new ResponseMessage(ResponseType.notExist);
    } else {
        responseMessage = new ResponseMessage(ResponseType.success, user);
    }

    res.status(responseMessage.statusCode).json(responseMessage);

})

router.post("/", async (req: Request, res: Response) => {
    try {
        const createdUser = await userService.createUser(req.body);

        const responseMessage = new ResponseMessage(ResponseType.success, createdUser);
        res.status(responseMessage.statusCode).json(responseMessage);
    } catch (error: any) {
        handleError(error, res);
    }
})

router.put("/", async (req: Request, res: Response) => {
    try {
        const updatedUser = await userService.updateUser(req.body);

        const responseMessage = new ResponseMessage(ResponseType.success, updatedUser);
        res.status(responseMessage.statusCode).json(responseMessage);
    } catch (error: any) {
        handleError(error, res);
    }
})

router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await userService.deleteUser(id);

        const responseMessage = new ResponseMessage(ResponseType.success);
        res.status(responseMessage.statusCode).json(responseMessage);
    } catch (error) {
        handleError(error, res);
    }
})


export default router;


