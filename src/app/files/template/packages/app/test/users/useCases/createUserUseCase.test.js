"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_mock_extended_1 = require("jest-mock-extended");
const _Dtos_testing_1 = require("\u1438Dtos testing\u1433");
const useCases_1 = require("../../../src/users/useCases");
describe("CreateUserUseCase", () => {
    let useCase;
    let createUserCommand;
    beforeAll(() => {
        createUserCommand = (0, jest_mock_extended_1.mock)();
        useCase = new useCases_1.CreateUserUseCase(createUserCommand);
    });
    it("must create user", async () => {
        const createUserDto = _Dtos_testing_1.createUserDtoFactory.build();
        const userDto = _Dtos_testing_1.userDtoFactory.build();
        createUserCommand.execute.mockResolvedValue(userDto);
        await expect(useCase.execute(createUserDto)).resolves.toStrictEqual(userDto);
    });
});
