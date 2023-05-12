import { ListUsersQueryDto, ListUsersResponseDto } from "ᐸDtosᐳ";
import { ListUsersQuery } from "../dataAccess";
export declare class ListUsersUseCase {
    private readonly listUsersQuery;
    constructor(listUsersQuery: ListUsersQuery);
    execute(query: ListUsersQueryDto): Promise<ListUsersResponseDto>;
}
