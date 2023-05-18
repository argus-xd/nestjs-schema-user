"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const nest_swagger_1 = require("@byndyusoft/nest-swagger");
const common_1 = require("../common/index");
class CreateUserDto extends (0, nest_swagger_1.OmitType)(common_1.UserDto, [
    "userId",
    "userVersion",
]) {
}
exports.CreateUserDto = CreateUserDto;
