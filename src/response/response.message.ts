import { isStringObject } from "util/types";
import { ResponseType } from "./response.type";

class ResponseMessage {
    statusCode: number;
    response: string;
    message: any | null;


    constructor(response: string, message?: any | null) {
        switch (response) {
            case ResponseType.success:
            case ResponseType.duplicate:
            case ResponseType.notExist:
                this.statusCode = 200;
                break;
            case ResponseType.badRequest:
                this.statusCode = 400;
                break;
            case ResponseType.forbidden:
                this.statusCode = 403;
                break;
            default:
                this.statusCode = 404;
                break;
        }

        this.response = response;
        this.message = message;
    }

    static fromError(error: any): ResponseMessage {
        if (error instanceof ResponseMessage) {
            return error;
        }

        return new ResponseMessage(
            ResponseType.badRequest,
            error.message,
        );
    }

}

export default ResponseMessage;