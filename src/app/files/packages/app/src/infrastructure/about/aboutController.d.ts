import { AboutService } from "./aboutService";
import { AboutDto } from "./dtos/index";
export declare class AboutController {
    private readonly service;
    constructor(service: AboutService);
    about(): AboutDto;
}
