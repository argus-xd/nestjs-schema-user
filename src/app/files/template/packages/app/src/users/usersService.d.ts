import { CreateUserDto, ListUsersQueryDto, ListUsersResponseDto, ParamsWithUserIdDto, QueryWithUserVersionDto, UpdateUserDto, UserDto } from "ᐸDtosᐳ";
import { CreateUserUseCase, DeleteUserUseCase, GetUserByIdUseCase, ListUsersUseCase, UpdateUserUseCase } from "./useCases";
export declare class UsersService {
    private readonly createUserUseCase;
    private readonly deleteUserUseCase;
    private readonly getUserByIdUseCase;
    private readonly listUsersUseCase;
    private readonly updateUserUseCase;
    constructor(createUserUseCase: CreateUserUseCase, deleteUserUseCase: DeleteUserUseCase, getUserByIdUseCase: GetUserByIdUseCase, listUsersUseCase: ListUsersUseCase, updateUserUseCase: UpdateUserUseCase);
    createUser(body: CreateUserDto): Promise<UserDto>;
    deleteUser(params: ParamsWithUserIdDto, query: QueryWithUserVersionDto): Promise<UserDto>;
    getUserById(params: ParamsWithUserIdDto): Promise<UserDto>;
    listUsers(query: ListUsersQueryDto): Promise<ListUsersResponseDto>;
    updateUser(params: ParamsWithUserIdDto, query: QueryWithUserVersionDto, body: UpdateUserDto): Promise<UserDto>;
}
