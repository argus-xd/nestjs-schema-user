import { PromService } from "@digikare/nestjs-prom";
import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
export declare class PrometheusExceptionFilter implements ExceptionFilter<unknown> {
    private readonly counter;
    constructor(promService: PromService);
    catch(exception: unknown, host: ArgumentsHost): void;
}
