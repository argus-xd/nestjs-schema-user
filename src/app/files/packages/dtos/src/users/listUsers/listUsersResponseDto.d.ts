import { UserDto } from "../common/index";
export declare class ListUsersResponseDto {
    readonly users: UserDto[];
    readonly nextPageToken?: string;
}
