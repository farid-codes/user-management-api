import ResponseMessage from "../response/response.message";
import { ResponseType } from "../response/response.type";
import User from "./user.model";
import UserRepository from "./users.repository";

const userRepository = new UserRepository();

class UserService {
    async getUsers(): Promise<User[]> {
        const users = await userRepository.getUsers();
        return users;
    }

    async getUserById(id: any): Promise<User> {
        const userId = parseInt(id);
        const user = await userRepository.getUserById(userId);

        return user;
    }

    async getUserByEmail(email: string): Promise<User> {
        const user = await userRepository.getUserByEmail(email);
        return user;
    }


    async createUser(body: any): Promise<User> {
        const user = User.fromBodyData(body);

        // Check if user already exists
        const existingUser = await userRepository.getUserByEmail(user.email);
        if (existingUser) {
            throw new ResponseMessage(ResponseType.badRequest, "User already exists");
        }

        const createdUser = await userRepository.createUser(user);
        return createdUser;
    }

    async updateUser(body: any): Promise<User> {
        const user = User.fromBodyData(body);
        if (user.id == null) {
            throw new ResponseMessage(ResponseType.badRequest, "User id is required");
        }

        // Check if user exists
        const existingUser = await userRepository.getUserById(user.id);
        if (!existingUser) {
            throw new ResponseMessage(ResponseType.badRequest, "User not found");
        }

        const updatedUser = await userRepository.updateUser(user);
        return updatedUser;
    }

    async deleteUser(id: any): Promise<void> {
        if (id == null) {
            throw new ResponseMessage(ResponseType.badRequest, "User id is required");
        }
        const userId = parseInt(id);

        // Check if user exists
        const user = await userRepository.getUserById(userId);
        if (!user) {
            throw new ResponseMessage(ResponseType.badRequest, "User not found");
        }

        await userRepository.deleteUser(userId);

    }

}

export default UserService;