"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsersResponseDtoFactory = void 0;
const dto_factory_1 = require("@byndyusoft/dto-factory");
const faker_1 = require("@faker-js/faker");
const common_1 = require("../common/index");
exports.listUsersResponseDtoFactory = (0, dto_factory_1.makeDtoFactory)(() => ({
    users: common_1.userDtoFactory.buildList(faker_1.faker.datatype.number(10)),
    nextPageToken: String(faker_1.faker.datatype.number()),
}));
