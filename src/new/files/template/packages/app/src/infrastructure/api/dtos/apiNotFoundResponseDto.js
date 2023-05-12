"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiNotFoundResponseDto = void 0;
const common_1 = require("@nestjs/common");
class ApiNotFoundResponseDto {
    constructor() {
        this.statusCode = common_1.HttpStatus.NOT_FOUND;
        this.error = "Not Found";
    }
}
exports.ApiNotFoundResponseDto = ApiNotFoundResponseDto;
