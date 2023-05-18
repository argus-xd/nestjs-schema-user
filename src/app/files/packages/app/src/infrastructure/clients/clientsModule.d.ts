import { HttpService } from "@nestjs/axios";
import { OnModuleInit } from "@nestjs/common";
import { ConfigDto } from "../config/index";
export declare class ClientsModule implements OnModuleInit {
    private readonly config;
    private readonly httpService;
    constructor(config: ConfigDto, httpService: HttpService);
    onModuleInit(): void;
}
