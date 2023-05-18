"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_mock_extended_1 = require("jest-mock-extended");
const _Dtos_testing_1 = require("\u1438Dtos testing\u1433");
const exceptions_1 = require("../../../src/users/exceptions/index");
const useCases_1 = require("../../../src/users/useCases/index");
describe("CheckUserExistsUseCase", () => {
    let useCase;
    let checkUserExistsQuery;
    beforeAll(() => {
        checkUserExistsQuery = (0, jest_mock_extended_1.mock)();
        useCase = new useCases_1.CheckUserExistsUseCase(checkUserExistsQuery);
    });
    it("must throw exception if user doesn't exists", async () => {
        const paramsWithUserIdDto = _Dtos_testing_1.paramsWithUserIdDtoFactory.build({
            userId: "1",
        });
        checkUserExistsQuery.ask.mockResolvedValue(false);
        await expect(useCase.execute(paramsWithUserIdDto)).rejects.toThrow(exceptions_1.UserNotFoundException);
    });
    it("must resolves without exceptions if user exists", async () => {
        const paramsWithUserIdDto = _Dtos_testing_1.paramsWithUserIdDtoFactory.build({
            userId: "1",
        });
        checkUserExistsQuery.ask.mockResolvedValue(true);
        await expect(useCase.execute(paramsWithUserIdDto)).resolves.not.toThrow();
    });
});
