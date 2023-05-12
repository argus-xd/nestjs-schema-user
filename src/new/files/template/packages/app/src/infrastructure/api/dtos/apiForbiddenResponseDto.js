"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiForbiddenResponseDto = void 0;
const common_1 = require("@nestjs/common");
class ApiForbiddenResponseDto {
    constructor() {
        this.statusCode = common_1.HttpStatus.FORBIDDEN;
        this.message = "Forbidden resource";
        this.error = "Forbidden";
    }
}
exports.ApiForbiddenResponseDto = ApiForbiddenResponseDto;
