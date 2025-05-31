"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_type_1 = require("./response.type");
class ResponseMessage {
    constructor(response, message) {
        switch (response) {
            case response_type_1.ResponseType.success:
            case response_type_1.ResponseType.duplicate:
            case response_type_1.ResponseType.notExist:
                this.statusCode = 200;
                break;
            case response_type_1.ResponseType.badRequest:
                this.statusCode = 400;
                break;
            case response_type_1.ResponseType.forbidden:
                this.statusCode = 403;
                break;
            default:
                this.statusCode = 404;
                break;
        }
        this.response = response;
        this.message = message;
    }
    static fromError(error) {
        if (error instanceof ResponseMessage) {
            return error;
        }
        return new ResponseMessage(response_type_1.ResponseType.badRequest, error.message);
    }
}
exports.default = ResponseMessage;
//# sourceMappingURL=response.message.js.map