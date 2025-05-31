"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
class UserRepository {
    async getUsers() {
        const users = await db_1.prisma.users.findMany();
        return users;
    }
    async getUserById(id) {
        const user = await db_1.prisma.users.findUnique({
            where: {
                id: id
            }
        });
        return user;
    }
    async getUserByEmail(email) {
        const user = await db_1.prisma.users.findUnique({
            where: {
                email: email
            }
        });
        return user;
    }
    async createUser(user) {
        const createdUser = await db_1.prisma.users.create({
            data: {
                name: user.name,
                email: user.email,
                username: user.username,
                password: user.password,
            }
        });
        return createdUser;
    }
    async updateUser(user) {
        const updatedUser = await db_1.prisma.users.update({
            where: {
                id: user.id
            },
            data: {
                name: user.name,
                email: user.email,
                username: user.username,
                password: user.password,
            }
        });
        return updatedUser;
    }
    async deleteUser(id) {
        await db_1.prisma.users.delete({
            where: {
                id: id
            }
        });
    }
}
exports.default = UserRepository;
//# sourceMappingURL=users.repository.js.map