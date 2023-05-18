import { UserDto } from "./userDto";
export declare class UserOutboxDto extends UserDto {
    readonly deletedAt?: Date;
}
