import { CreateUserDto, UserDto } from "ᐸDtosᐳ";
import { CreateUserCommand } from "../dataAccess";
export declare class CreateUserUseCase {
    private readonly createUserCommand;
    constructor(createUserCommand: CreateUserCommand);
    execute(body: CreateUserDto): Promise<UserDto>;
}
