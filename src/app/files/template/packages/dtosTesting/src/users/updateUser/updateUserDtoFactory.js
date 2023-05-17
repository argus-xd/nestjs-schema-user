"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserDtoFactory = void 0;
const dto_factory_1 = require("@byndyusoft/dto-factory");
const createUser_1 = require("../createUser");
exports.updateUserDtoFactory = (0, dto_factory_1.makeDtoFactory)(() => createUser_1.createUserDtoFactory.build());
