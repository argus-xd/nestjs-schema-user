"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_mock_extended_1 = require("jest-mock-extended");
const _Dtos_testing_1 = require("\u1438Dtos testing\u1433");
const usersController_1 = require("../../src/users/usersController");
const usersService_1 = require("../../src/users/usersService");
describe("UsersController", () => {
    let controller;
    let service;
    let createUserUseCase;
    let deleteUserUseCase;
    let getUserByIdUseCase;
    let listUsersUseCase;
    let updateUserUseCase;
    beforeAll(() => {
        createUserUseCase = (0, jest_mock_extended_1.mock)();
        deleteUserUseCase = (0, jest_mock_extended_1.mock)();
        getUserByIdUseCase = (0, jest_mock_extended_1.mock)();
        listUsersUseCase = (0, jest_mock_extended_1.mock)();
        updateUserUseCase = (0, jest_mock_extended_1.mock)();
        service = new usersService_1.UsersService(createUserUseCase, deleteUserUseCase, getUserByIdUseCase, listUsersUseCase, updateUserUseCase);
        controller = new usersController_1.UsersController(service);
    });
    describe("createUser", () => {
        it("must create user", async () => {
            const createUserDto = _Dtos_testing_1.createUserDtoFactory.build();
            const userDto = _Dtos_testing_1.userDtoFactory.build();
            createUserUseCase.execute.mockResolvedValue(userDto);
            await expect(controller.createUser(createUserDto)).resolves.toStrictEqual(userDto);
        });
    });
    describe("listUsers", () => {
        it("must list users", async () => {
            const listUsersQueryDto = _Dtos_testing_1.listUsersQueryDtoFactory.build();
            const listUsersResponseDto = _Dtos_testing_1.listUsersResponseDtoFactory.build();
            listUsersUseCase.execute.mockResolvedValue(listUsersResponseDto);
            await expect(controller.listUsers(listUsersQueryDto)).resolves.toStrictEqual(listUsersResponseDto);
        });
    });
    describe("getUserById", () => {
        it("must get user by id", async () => {
            const paramsWithUserIdDto = _Dtos_testing_1.paramsWithUserIdDtoFactory.build();
            const userDto = _Dtos_testing_1.userDtoFactory.build();
            getUserByIdUseCase.execute.mockResolvedValue(userDto);
            await expect(controller.getUserById(paramsWithUserIdDto)).resolves.toStrictEqual(userDto);
        });
    });
    describe("updateUser", () => {
        it("must update user", async () => {
            const paramsWithUserIdDto = _Dtos_testing_1.paramsWithUserIdDtoFactory.build();
            const queryWithUserVersionDto = _Dtos_testing_1.queryWithUserVersionDtoFactory.build();
            const updateUserDto = _Dtos_testing_1.updateUserDtoFactory.build();
            const userDto = _Dtos_testing_1.userDtoFactory.build();
            updateUserUseCase.execute.mockResolvedValue(userDto);
            await expect(controller.updateUser(paramsWithUserIdDto, queryWithUserVersionDto, updateUserDto)).resolves.toStrictEqual(userDto);
        });
    });
    describe("deleteUser", () => {
        it("must delete user", async () => {
            const paramsWithUserIdDto = _Dtos_testing_1.paramsWithUserIdDtoFactory.build();
            const queryWithUserVersionDto = _Dtos_testing_1.queryWithUserVersionDtoFactory.build();
            const userDto = _Dtos_testing_1.userDtoFactory.build();
            deleteUserUseCase.execute.mockResolvedValue(userDto);
            await expect(controller.deleteUser(paramsWithUserIdDto, queryWithUserVersionDto)).resolves.toStrictEqual(userDto);
        });
    });
});
