import { ParamsWithUserIdDto, QueryWithUserVersionDto, UpdateUserDto, UserDto } from "ᐸDtosᐳ";
import { UpdateUserCommand } from "../dataAccess";
import { CheckUserExistsUseCase } from "./checkUserExistsUseCase";
export declare class UpdateUserUseCase {
    private readonly checkUserExistsUseCase;
    private readonly updateUserCommand;
    constructor(checkUserExistsUseCase: CheckUserExistsUseCase, updateUserCommand: UpdateUserCommand);
    execute(params: ParamsWithUserIdDto, query: QueryWithUserVersionDto, body: UpdateUserDto): Promise<UserDto>;
}
