import { TracingService } from "@byndyusoft/nest-opentracing";
import { UserDto } from "ᐸDtosᐳ";
export interface IListUsersQueryOptions {
    readonly userIds?: string[];
    readonly names?: string[];
    readonly emails?: string[];
    readonly pageSize?: number;
    readonly pageToken?: number;
}
export declare class ListUsersQuery {
    private readonly tracingService;
    constructor(tracingService: TracingService);
    ask(options: IListUsersQueryOptions): Promise<UserDto[]>;
}
