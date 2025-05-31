"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, username, email, password, id) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    static fromBodyData(bodyData) {
        if (!bodyData || !bodyData.name || !bodyData.username || !bodyData.email || !bodyData.password) {
            throw new Error("Missing required user data from request body.");
        }
        const id = bodyData.id != null ? parseInt(bodyData.id) : null;
        return new User(bodyData.name, bodyData.username, bodyData.email, bodyData.password, id);
    }
}
exports.default = User;
//# sourceMappingURL=user.model.js.map