import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { BaseExceptionFilter } from "./baseExceptionFilter";
import { PrometheusExceptionFilter } from "./prometheusExceptionFilter";
export declare class CatchAllExceptionFilter implements ExceptionFilter<unknown> {
    private readonly baseExceptionFilter;
    private readonly prometheusExceptionFilter;
    constructor(baseExceptionFilter: BaseExceptionFilter, prometheusExceptionFilter: PrometheusExceptionFilter);
    catch(exception: unknown, host: ArgumentsHost): void;
}
