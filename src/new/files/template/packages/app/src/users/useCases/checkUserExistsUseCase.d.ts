import { ParamsWithUserIdDto } from "ᐸDtosᐳ";
import { CheckUserExistsQuery } from "../dataAccess";
export declare class CheckUserExistsUseCase {
    private readonly checkUserExistsQuery;
    constructor(checkUserExistsQuery: CheckUserExistsQuery);
    execute(params: ParamsWithUserIdDto): Promise<void>;
}
