import { ConfigDto } from "../config";
import { PackageJsonDto } from "../packageJson";
import { AboutDto } from "./dtos";
export declare class AboutService {
    private readonly config;
    private readonly packageJson;
    constructor(config: ConfigDto, packageJson: PackageJsonDto);
    about(): AboutDto;
}
