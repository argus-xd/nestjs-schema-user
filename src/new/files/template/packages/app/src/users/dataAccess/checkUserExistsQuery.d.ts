import { TracingService } from "@byndyusoft/nest-opentracing";
export interface ICheckUserExistsQueryOptions {
    readonly userId: string;
}
export declare class CheckUserExistsQuery {
    private readonly tracingService;
    constructor(tracingService: TracingService);
    ask(options: ICheckUserExistsQueryOptions): Promise<boolean>;
}
