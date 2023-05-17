"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCommonResponses = void 0;
const nest_swagger_1 = require("@byndyusoft/nest-swagger");
const common_1 = require("@nestjs/common");
const dtos_1 = require("../dtos");
function ApiCommonResponses(...extraHttpStatuses) {
    return (0, common_1.applyDecorators)(...(extraHttpStatuses.includes(common_1.HttpStatus.BAD_REQUEST)
        ? [
            (0, nest_swagger_1.ApiBadRequestResponse)({
                description: "Bad Request",
                type: dtos_1.ApiBadRequestResponseDto,
            }),
        ]
        : []), ...(extraHttpStatuses.includes(common_1.HttpStatus.FORBIDDEN)
        ? [
            (0, nest_swagger_1.ApiForbiddenResponse)({
                description: "Forbidden",
                type: dtos_1.ApiForbiddenResponseDto,
            }),
        ]
        : []), ...(extraHttpStatuses.includes(common_1.HttpStatus.NOT_FOUND)
        ? [
            (0, nest_swagger_1.ApiNotFoundResponse)({
                description: "Not Found",
                type: dtos_1.ApiNotFoundResponseDto,
            }),
        ]
        : []), ...(extraHttpStatuses.includes(common_1.HttpStatus.CONFLICT)
        ? [
            (0, nest_swagger_1.ApiConflictResponse)({
                description: "Conflict",
                type: dtos_1.ApiConflictResponseDto,
            }),
        ]
        : []), (0, nest_swagger_1.ApiInternalServerErrorResponse)({
        description: "Internal Server Error",
        type: dtos_1.ApiInternalServerErrorResponseDto,
    }));
}
exports.ApiCommonResponses = ApiCommonResponses;
