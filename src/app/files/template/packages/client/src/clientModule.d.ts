import { TRegisterAsyncOptions } from "@byndyusoft/nest-dynamic-module";
import { IHttpClientOptions } from "@byndyusoft/nest-http-client";
import { DynamicModule } from "@nestjs/common";
export declare class ClientModule {
    static registerAsync(options?: TRegisterAsyncOptions<IHttpClientOptions>): DynamicModule;
}
