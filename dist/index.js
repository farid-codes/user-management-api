"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_controller_1 = __importDefault(require("./users/users.controller"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
const PORT = process.env.PORT || 3000;
app.use("/users", users_controller_1.default);
// handle 404 error
app.use((req, res, next) => {
    next((0, http_errors_1.default)(404));
});
app.listen(PORT, () => console.log(`⚡️[server]: Server is running at https://localhost:` + PORT));
//# sourceMappingURL=index.js.map