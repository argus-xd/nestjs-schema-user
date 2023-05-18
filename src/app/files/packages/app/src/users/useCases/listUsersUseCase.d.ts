import { ListUsersQueryDto, ListUsersResponseDto } from "ᐸDtosᐳ";
import { ListUsersQuery } from "../dataAccess/index";
export declare class ListUsersUseCase {
    private readonly listUsersQuery;
    constructor(listUsersQuery: ListUsersQuery);
    execute(query: ListUsersQueryDto): Promise<ListUsersResponseDto>;
}
