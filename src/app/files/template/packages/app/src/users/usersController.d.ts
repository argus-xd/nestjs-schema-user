import { CreateUserDto, ListUsersQueryDto, ListUsersResponseDto, ParamsWithUserIdDto, QueryWithUserVersionDto, UpdateUserDto, UserDto } from "ᐸDtosᐳ";
import { UsersService } from "./usersService";
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
    createUser(body: CreateUserDto): Promise<UserDto>;
    listUsers(query: ListUsersQueryDto): Promise<ListUsersResponseDto>;
    getUserById(params: ParamsWithUserIdDto): Promise<UserDto>;
    updateUser(params: ParamsWithUserIdDto, query: QueryWithUserVersionDto, body: UpdateUserDto): Promise<UserDto>;
    deleteUser(params: ParamsWithUserIdDto, query: QueryWithUserVersionDto): Promise<UserDto>;
}
