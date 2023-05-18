import { makeDtoFactory } from "@byndyusoft/dto-factory";

import { UpdateUserDto } from "ᐸDtosᐳ";

import { createUserDtoFactory } from "../createUser/index";

export const updateUserDtoFactory = makeDtoFactory<UpdateUserDto>(() =>
  createUserDtoFactory.build(),
);
