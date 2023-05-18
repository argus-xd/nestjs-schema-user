"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_mock_extended_1 = require("jest-mock-extended");
const _Dtos_testing_1 = require("\u1438Dtos testing\u1433");
const exceptions_1 = require("../../../src/users/exceptions/index");
const useCases_1 = require("../../../src/users/useCases/index");
describe("GetUserByIdUseCase", () => {
    let useCase;
    let listUsersQuery;
    beforeAll(() => {
        listUsersQuery = (0, jest_mock_extended_1.mock)();
        useCase = new useCases_1.GetUserByIdUseCase(listUsersQuery);
    });
    it("must throw exception if user doesn't exists", async () => {
        const paramsWithUserIdDto = _Dtos_testing_1.paramsWithUserIdDtoFactory.build({
            userId: "1",
        });
        listUsersQuery.ask.mockResolvedValue([]);
        await expect(useCase.execute(paramsWithUserIdDto)).rejects.toThrow(exceptions_1.UserNotFoundException);
    });
    it("must get user by id", async () => {
        const paramsWithUserIdDto = _Dtos_testing_1.paramsWithUserIdDtoFactory.build();
        const userDto = _Dtos_testing_1.userDtoFactory.build();
        listUsersQuery.ask.mockResolvedValue([userDto]);
        await expect(useCase.execute(paramsWithUserIdDto)).resolves.toStrictEqual(userDto);
    });
});
