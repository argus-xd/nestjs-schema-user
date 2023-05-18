import { HttpClient } from "@byndyusoft/nest-http-client";
import { CreateUserDto, ListUsersQueryDto, ListUsersResponseDto, ParamsWithUserIdDto, QueryWithUserVersionDto, UpdateUserDto, UserDto } from "ᐸDtosᐳ";
export declare class UsersClient {
    private readonly httpClient;
    constructor(httpClient: HttpClient);
    createUser(request: CreateUserDto): Promise<UserDto>;
    deleteUser(request: ParamsWithUserIdDto & QueryWithUserVersionDto): Promise<UserDto>;
    getUserById(request: ParamsWithUserIdDto): Promise<UserDto>;
    listUsers(request?: Partial<ListUsersQueryDto>): Promise<ListUsersResponseDto>;
    updateUser(request: ParamsWithUserIdDto & QueryWithUserVersionDto & UpdateUserDto): Promise<UserDto>;
}
