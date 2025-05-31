"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const response_message_1 = __importDefault(require("../response/response.message"));
const response_type_1 = require("../response/response.type");
const users_services_1 = __importDefault(require("./users.services"));
const router = express_1.default.Router();
const userService = new users_services_1.default();
const handleError = (error, res) => {
    const responseMessage = response_message_1.default.fromError(error);
    res.status(responseMessage.statusCode).json(responseMessage);
};
router.get("/", async (req, res) => {
    const users = await userService.getUsers();
    let responseMessage;
    if (!users.length) {
        responseMessage = new response_message_1.default(response_type_1.ResponseType.notExist);
    }
    else {
        responseMessage = new response_message_1.default(response_type_1.ResponseType.success, users);
    }
    res.json(responseMessage);
});
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const user = await userService.getUserById(id);
    let responseMessage;
    if (user == null) {
        responseMessage = new response_message_1.default(response_type_1.ResponseType.notExist);
    }
    else {
        responseMessage = new response_message_1.default(response_type_1.ResponseType.success, user);
    }
    res.status(responseMessage.statusCode).json(responseMessage);
});
router.post("/", async (req, res) => {
    try {
        const createdUser = await userService.createUser(req.body);
        const responseMessage = new response_message_1.default(response_type_1.ResponseType.success, createdUser);
        res.status(responseMessage.statusCode).json(responseMessage);
    }
    catch (error) {
        handleError(error, res);
    }
});
router.put("/", async (req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.body);
        const responseMessage = new response_message_1.default(response_type_1.ResponseType.success, updatedUser);
        res.status(responseMessage.statusCode).json(responseMessage);
    }
    catch (error) {
        handleError(error, res);
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await userService.deleteUser(id);
        const responseMessage = new response_message_1.default(response_type_1.ResponseType.success);
        res.status(responseMessage.statusCode).json(responseMessage);
    }
    catch (error) {
        handleError(error, res);
    }
});
exports.default = router;
//# sourceMappingURL=users.controller.js.map