import { HealthCheckResult, HealthCheckService } from "@nestjs/terminus";
export declare class HealthCheckController {
    private service;
    constructor(service: HealthCheckService);
    healthz(): Promise<HealthCheckResult>;
    readiness(): Promise<HealthCheckResult>;
}
