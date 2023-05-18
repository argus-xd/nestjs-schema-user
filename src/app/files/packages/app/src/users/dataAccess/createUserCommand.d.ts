import { TracingService } from "@byndyusoft/nest-opentracing";
import { UserDto } from "ᐸDtosᐳ";
export interface ICreateUserCommandOptions {
    readonly payload: {
        name: string;
        email: string;
    };
}
export declare class CreateUserCommand {
    private readonly tracingService;
    constructor(tracingService: TracingService);
    execute(options: ICreateUserCommandOptions): Promise<UserDto>;
}
