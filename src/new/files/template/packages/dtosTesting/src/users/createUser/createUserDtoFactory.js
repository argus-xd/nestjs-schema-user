"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserDtoFactory = void 0;
const dto_factory_1 = require("@byndyusoft/dto-factory");
const lodash_1 = require("lodash");
const common_1 = require("../common");
exports.createUserDtoFactory = (0, dto_factory_1.makeDtoFactory)(() => lodash_1.default.omit(common_1.userDtoFactory.build(), "userId", "userVersion"));
