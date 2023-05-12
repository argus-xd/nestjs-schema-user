"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDtoFactory = void 0;
const dto_factory_1 = require("@byndyusoft/dto-factory");
const faker_1 = require("@faker-js/faker");
exports.userDtoFactory = (0, dto_factory_1.makeDtoFactory)(() => ({
    userId: String(faker_1.faker.datatype.number()),
    name: faker_1.faker.name.fullName(),
    email: faker_1.faker.internet.email(),
    userVersion: faker_1.faker.datatype.number(),
}));
