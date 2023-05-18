import { Injectable } from "@nestjs/common";

import { ParamsWithUserIdDto, UserDto } from "ᐸDtosᐳ";

import { ListUsersQuery } from "../dataAccess/index";
import { UserNotFoundException } from "../exceptions/index";

@Injectable()
export class GetUserByIdUseCase {
  public constructor(private readonly listUsersQuery: ListUsersQuery) {}

  public async execute(params: ParamsWithUserIdDto): Promise<UserDto> {
    const users = await this.listUsersQuery.ask({
      userIds: [params.userId],
    });

    if (users.length === 0) {
      throw new UserNotFoundException(params.userId);
    }

    return users[0];
  }
}
