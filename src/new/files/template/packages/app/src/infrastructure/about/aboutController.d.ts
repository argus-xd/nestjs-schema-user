import { AboutService } from "./aboutService";
import { AboutDto } from "./dtos";
export declare class AboutController {
    private readonly service;
    constructor(service: AboutService);
    about(): AboutDto;
}
