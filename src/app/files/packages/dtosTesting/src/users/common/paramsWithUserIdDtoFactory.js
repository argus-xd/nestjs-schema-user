"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramsWithUserIdDtoFactory = void 0;
const dto_factory_1 = require("@byndyusoft/dto-factory");
const lodash_1 = require("lodash");
const userDtoFactory_1 = require("./userDtoFactory");
exports.paramsWithUserIdDtoFactory = (0, dto_factory_1.makeDtoFactory)(() => lodash_1.default.pick(userDtoFactory_1.userDtoFactory.build(), "userId"));
