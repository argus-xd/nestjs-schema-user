import { UserDto } from "../common/index";

export class ListUsersResponseDto {
  public readonly users!: UserDto[];

  public readonly nextPageToken?: string;
}
