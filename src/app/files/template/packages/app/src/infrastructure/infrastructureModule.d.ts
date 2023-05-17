import { Logger } from "@byndyusoft/nest-pino";
export declare class InfrastructureModule {
    private readonly logger;
    constructor(logger: Logger);
    onApplicationShutdown(signal?: string): void;
}
