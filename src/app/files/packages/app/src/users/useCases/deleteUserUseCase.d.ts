import { ParamsWithUserIdDto, QueryWithUserVersionDto, UserDto } from "ᐸDtosᐳ";
import { UpdateUserCommand } from "../dataAccess/index";
import { CheckUserExistsUseCase } from "./checkUserExistsUseCase";
export declare class DeleteUserUseCase {
    private readonly checkUserExistsUseCase;
    private readonly updateUserCommand;
    constructor(checkUserExistsUseCase: CheckUserExistsUseCase, updateUserCommand: UpdateUserCommand);
    execute(params: ParamsWithUserIdDto, query: QueryWithUserVersionDto): Promise<UserDto>;
}
