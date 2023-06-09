import { Injectable } from "@nestjs/common";

import { ParamsWithUserIdDto } from "ᐸDtosᐳ";

import { CheckUserExistsQuery } from "../dataAccess/index";
import { UserNotFoundException } from "../exceptions/index";

@Injectable()
export class CheckUserExistsUseCase {
  public constructor(
    private readonly checkUserExistsQuery: CheckUserExistsQuery,
  ) {}

  public async execute(params: ParamsWithUserIdDto): Promise<void> {
    const isUserExists = await this.checkUserExistsQuery.ask({
      userId: params.userId,
    });

    if (!isUserExists) {
      throw new UserNotFoundException(params.userId);
    }
  }
}
