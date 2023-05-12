import { UserDto } from "../common";
export declare class ListUsersResponseDto {
    readonly users: UserDto[];
    readonly nextPageToken?: string;
}
