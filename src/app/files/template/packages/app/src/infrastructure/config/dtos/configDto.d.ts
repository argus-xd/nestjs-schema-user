import { HttpConfigDto } from "./httpConfigDto";
import { LoggerConfigDto } from "./loggerConfigDto";
import { PgConfigDto } from "./pgConfigDto";
export declare class ConfigDto {
    readonly configEnv: string;
    readonly pg: PgConfigDto;
    readonly http: HttpConfigDto;
    readonly logger: LoggerConfigDto;
}
