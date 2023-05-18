import { ParamsWithUserIdDto, UserDto } from "ᐸDtosᐳ";
import { ListUsersQuery } from "../dataAccess/index";
export declare class GetUserByIdUseCase {
    private readonly listUsersQuery;
    constructor(listUsersQuery: ListUsersQuery);
    execute(params: ParamsWithUserIdDto): Promise<UserDto>;
}
