import { HttpStatus } from "@nestjs/common";
export declare function ApiCommonResponses(...extraHttpStatuses: ReadonlyArray<HttpStatus.BAD_REQUEST | HttpStatus.FORBIDDEN | HttpStatus.NOT_FOUND | HttpStatus.CONFLICT>): MethodDecorator;
