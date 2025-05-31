import { prisma } from "../db"
import User from "./user.model";

class UserRepository {

    async getUsers(): Promise<User[]> {
        const users = await prisma.users.findMany() as User[];
        return users;
    }

    async getUserById(id: number): Promise<User> {
        const user = await prisma.users.findUnique(
            {
                where: {
                    id: id
                }
            }
        ) as User;
        return user;
    }
    async getUserByEmail(email: string): Promise<User> {
        const user = await prisma.users.findUnique(
            {
                where: {
                    email: email
                }
            }
        ) as User;
        return user;
    }

    async createUser(user: User): Promise<User> {
        const createdUser = await prisma.users.create(
            {
                data: {
                    name: user.name,
                    email: user.email,
                    username: user.username,
                    password: user.password,
                }
            }
        ) as User;

        return createdUser;
    }

    async updateUser(user: User): Promise<User> {
        const updatedUser = await prisma.users.update({
            where: {
                id: user.id!
            },
            data: {
                name: user.name,
                email: user.email,
                username: user.username,
                password: user.password,
            }
        }) as User;

        return updatedUser;
    }

    async deleteUser(id: number): Promise<void> {
        await prisma.users.delete({
            where: {
                id: id
            }
        })
    }
}

export default UserRepository;