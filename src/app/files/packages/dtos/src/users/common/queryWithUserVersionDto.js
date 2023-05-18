"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryWithUserVersionDto = void 0;
const nest_swagger_1 = require("@byndyusoft/nest-swagger");
const userDto_1 = require("./userDto");
class QueryWithUserVersionDto extends (0, nest_swagger_1.PickType)(userDto_1.UserDto, [
    "userVersion",
]) {
}
exports.QueryWithUserVersionDto = QueryWithUserVersionDto;
