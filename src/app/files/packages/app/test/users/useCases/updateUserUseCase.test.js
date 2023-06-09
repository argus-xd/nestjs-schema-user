"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_mock_extended_1 = require("jest-mock-extended");
const _Dtos_testing_1 = require("\u1438Dtos testing\u1433");
const useCases_1 = require("../../../src/users/useCases/index");
describe("UpdateUserCommand", () => {
    let useCase;
    let checkUserExistsUseCase;
    let updateUserCommand;
    beforeAll(() => {
        checkUserExistsUseCase = (0, jest_mock_extended_1.mock)();
        updateUserCommand = (0, jest_mock_extended_1.mock)();
        useCase = new useCases_1.UpdateUserUseCase(checkUserExistsUseCase, updateUserCommand);
    });
    it("must update user", async () => {
        const paramsWithUserIdDto = _Dtos_testing_1.paramsWithUserIdDtoFactory.build();
        const queryWithUserVersionDto = _Dtos_testing_1.queryWithUserVersionDtoFactory.build();
        const updateUserDto = _Dtos_testing_1.updateUserDtoFactory.build();
        const userDto = _Dtos_testing_1.userDtoFactory.build();
        updateUserCommand.execute.mockResolvedValue(userDto);
        await expect(useCase.execute(paramsWithUserIdDto, queryWithUserVersionDto, updateUserDto)).resolves.toStrictEqual(userDto);
    });
});
