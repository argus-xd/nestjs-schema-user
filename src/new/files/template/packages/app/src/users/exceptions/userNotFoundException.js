"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class UserNotFoundException extends common_1.NotFoundException {
    constructor(userId) {
        super(`user with id ${userId} not found`, "BYS_404");
    }
}
exports.UserNotFoundException = UserNotFoundException;
