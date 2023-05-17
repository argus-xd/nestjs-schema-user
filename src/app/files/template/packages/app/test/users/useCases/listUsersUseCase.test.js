"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_mock_extended_1 = require("jest-mock-extended");
const _Dtos_testing_1 = require("\u1438Dtos testing\u1433");
const useCases_1 = require("../../../src/users/useCases");
describe("ListUsersUseCase", () => {
    let useCase;
    let listUsersQuery;
    beforeAll(() => {
        listUsersQuery = (0, jest_mock_extended_1.mock)();
        useCase = new useCases_1.ListUsersUseCase(listUsersQuery);
    });
    it("must return empty nextPageToken if users less than pageSize", async () => {
        const listUsersQueryDto = _Dtos_testing_1.listUsersQueryDtoFactory.build({
            pageSize: 10,
        });
        const userDtos = _Dtos_testing_1.userDtoFactory.buildList(5);
        listUsersQuery.ask.mockResolvedValue(userDtos);
        await expect(useCase.execute(listUsersQueryDto)).resolves.toStrictEqual(_Dtos_testing_1.listUsersResponseDtoFactory.build({
            users: userDtos,
            nextPageToken: undefined,
        }));
    });
    it("must list users", async () => {
        const listUsersQueryDto = _Dtos_testing_1.listUsersQueryDtoFactory.build({
            pageSize: 10,
            pageToken: "0",
        });
        const userDtos = _Dtos_testing_1.userDtoFactory.buildList(10);
        listUsersQuery.ask.mockResolvedValue(userDtos);
        await expect(useCase.execute(listUsersQueryDto)).resolves.toStrictEqual(_Dtos_testing_1.listUsersResponseDtoFactory.build({
            users: userDtos,
            nextPageToken: "10",
        }));
    });
});
