"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConflictResponseDto = void 0;
const common_1 = require("@nestjs/common");
class ApiConflictResponseDto {
    constructor() {
        this.statusCode = common_1.HttpStatus.CONFLICT;
        this.error = "Conflict";
    }
}
exports.ApiConflictResponseDto = ApiConflictResponseDto;
