import { TracingService } from "@byndyusoft/nest-opentracing";
import { UserDto } from "ᐸDtosᐳ";
export interface IUpdateUserCommandOptions {
    readonly userId: string;
    readonly userVersion: number;
    readonly payload: {
        deletedAt?: Date;
        name?: string;
        email?: string;
    };
}
export declare class UpdateUserCommand {
    private readonly tracingService;
    constructor(tracingService: TracingService);
    execute(options: IUpdateUserCommandOptions): Promise<UserDto>;
}
