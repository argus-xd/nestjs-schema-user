"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userOutboxDtoFactory = void 0;
const dto_factory_1 = require("@byndyusoft/dto-factory");
const faker_1 = require("@faker-js/faker");
const userDtoFactory_1 = require("./userDtoFactory");
exports.userOutboxDtoFactory = (0, dto_factory_1.makeDtoFactory)(() => (Object.assign(Object.assign({}, userDtoFactory_1.userDtoFactory.build()), { deletedAt: faker_1.faker.date.soon() })));
