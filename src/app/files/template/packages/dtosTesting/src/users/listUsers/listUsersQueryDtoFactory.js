"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsersQueryDtoFactory = void 0;
const dto_factory_1 = require("@byndyusoft/dto-factory");
const faker_1 = require("@faker-js/faker");
exports.listUsersQueryDtoFactory = (0, dto_factory_1.makeDtoFactory)(() => ({
    userIds: Array.from({ length: faker_1.faker.datatype.number(10) }).map(() => String(faker_1.faker.datatype.number())),
    names: Array.from({ length: faker_1.faker.datatype.number(10) }).map(() => faker_1.faker.name.fullName()),
    emails: Array.from({ length: faker_1.faker.datatype.number(10) }).map(() => faker_1.faker.internet.email()),
    pageSize: faker_1.faker.datatype.number(),
    pageToken: String(faker_1.faker.datatype.number()),
}));
