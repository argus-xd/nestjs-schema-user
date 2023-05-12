"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiInternalServerErrorResponseDto = void 0;
const common_1 = require("@nestjs/common");
class ApiInternalServerErrorResponseDto {
    constructor() {
        this.statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        this.message = "Internal server error";
    }
}
exports.ApiInternalServerErrorResponseDto = ApiInternalServerErrorResponseDto;
