"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_message_1 = __importDefault(require("../response/response.message"));
const response_type_1 = require("../response/response.type");
const user_model_1 = __importDefault(require("./user.model"));
const users_repository_1 = __importDefault(require("./users.repository"));
const userRepository = new users_repository_1.default();
class UserService {
    async getUsers() {
        const users = await userRepository.getUsers();
        return users;
    }
    async getUserById(id) {
        const userId = parseInt(id);
        const user = await userRepository.getUserById(userId);
        return user;
    }
    async getUserByEmail(email) {
        const user = await userRepository.getUserByEmail(email);
        return user;
    }
    async createUser(body) {
        const user = user_model_1.default.fromBodyData(body);
        // Check if user already exists
        const existingUser = await userRepository.getUserByEmail(user.email);
        if (existingUser) {
            throw new response_message_1.default(response_type_1.ResponseType.badRequest, "User already exists");
        }
        const createdUser = await userRepository.createUser(user);
        return createdUser;
    }
    async updateUser(body) {
        const user = user_model_1.default.fromBodyData(body);
        if (user.id == null) {
            throw new response_message_1.default(response_type_1.ResponseType.badRequest, "User id is required");
        }
        // Check if user exists
        const existingUser = await userRepository.getUserById(user.id);
        if (!existingUser) {
            throw new response_message_1.default(response_type_1.ResponseType.badRequest, "User not found");
        }
        const updatedUser = await userRepository.updateUser(user);
        return updatedUser;
    }
    async deleteUser(id) {
        if (id == null) {
            throw new response_message_1.default(response_type_1.ResponseType.badRequest, "User id is required");
        }
        const userId = parseInt(id);
        // Check if user exists
        const user = await userRepository.getUserById(userId);
        if (!user) {
            throw new response_message_1.default(response_type_1.ResponseType.badRequest, "User not found");
        }
        await userRepository.deleteUser(userId);
    }
}
exports.default = UserService;
//# sourceMappingURL=users.services.js.map