"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiBadRequestResponseDto = void 0;
const common_1 = require("@nestjs/common");
class ApiBadRequestResponseDto {
    constructor() {
        this.statusCode = common_1.HttpStatus.BAD_REQUEST;
        this.error = "Bad Request";
    }
}
exports.ApiBadRequestResponseDto = ApiBadRequestResponseDto;
