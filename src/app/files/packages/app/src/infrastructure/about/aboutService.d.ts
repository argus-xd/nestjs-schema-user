import { ConfigDto } from "../config/index";
import { PackageJsonDto } from "../packageJson/index";
import { AboutDto } from "./dtos/index";
export declare class AboutService {
    private readonly config;
    private readonly packageJson;
    constructor(config: ConfigDto, packageJson: PackageJsonDto);
    about(): AboutDto;
}
