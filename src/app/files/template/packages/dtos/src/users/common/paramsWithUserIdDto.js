"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamsWithUserIdDto = void 0;
const nest_swagger_1 = require("@byndyusoft/nest-swagger");
const userDto_1 = require("./userDto");
class ParamsWithUserIdDto extends (0, nest_swagger_1.PickType)(userDto_1.UserDto, ["userId"]) {
}
exports.ParamsWithUserIdDto = ParamsWithUserIdDto;
