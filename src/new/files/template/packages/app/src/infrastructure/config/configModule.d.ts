import { DynamicModule } from "@nestjs/common";
export declare class ConfigModule {
    static forRoot(): DynamicModule;
    private static configFactory;
    private static loadConfig;
    private static validateConfig;
}
